'use server'

import { auth, signIn, signOut } from '@/auth'
import { z } from 'zod'
import { neon } from '@neondatabase/serverless'
import { redirect } from 'next/navigation'
import { signUpSchemaCredentials, updateProfileSchema } from './defenitions'
import { v4 } from 'uuid'
import { unstable_noStore } from 'next/cache'

export async function loginOAuth(providerString: string) {
  await signIn(providerString)
}

export async function logout() {
  await signOut()
  redirect('/')
}

export async function loginWithCredentials(prevState: any, formData: FormData) {
  unstable_noStore()
  const formObjData = {
    pseudonim: formData.get('pseudonim'),
    password: formData.get('password'),
  }

  await signIn('credentials', formData)
}

export async function signupWithCredentials(
  prevState: any,
  formData: FormData
) {
  unstable_noStore()
  const formDataObj = {
    pseudonim: formData.get('pseudonim'),
    password: formData.get('password'),
    password_repeat: formData.get('password_repeat'),
  }

  const parsed = signUpSchemaCredentials.safeParse(formDataObj)
  if (parsed.success) {
    const { pseudonim, password, password_repeat } = parsed.data
    const passwordsMatch = password === password_repeat
    if (passwordsMatch) {
      const id = v4()
      const r = await insertPerson(pseudonim, password, id)
      if (r) {
        const r2 = await signIn('credentials', formDataObj)
        redirect('/')
      } else {
        console.log('New person was not created. something went wrong')
      }
    } else {
      console.log('Passwords dont match')
      return {
        error: {
          passwordsDontMatch: 'Passwords dont match',
        },
      }
      // throw new Error('Passwords dont match')
    }
  } else {
    console.log('Credentials error. Validation has NOT passed')
  }
}

export async function updateProfile(id: string, prevState: any, formData: FormData) {
  unstable_noStore()

  const formDataObj = {
    name: formData.get('name'),
    pseudonim: formData.get('pseudonim'),
  }

  auth()

  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

  const parsed = updateProfileSchema.safeParse(formDataObj)

  if (parsed.success) {
    const { name, pseudonim } = parsed.data
    try {
      const r =
        await sql`UPDATE person SET name=${name}, pseudonim=${pseudonim} WHERE id=${id}`
      
      // return {
      //   message: 'Data was successfuly updated!'
      // }
    } catch (error) {
      console.log('failed to update profile')
      throw new Error('Failed to update profile')
    }
    redirect('/profile')
  } else {
    return {
      error: {
        notCorrectValues: 'Were passed not correct values',
      },
    }
  }
}

export async function getUserViaId(id: string | undefined) {
  unstable_noStore()
  
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

  try {
    const r = await sql`SELECT * FROM person WHERE id=${id}`
    console.log(r)
    return r[0]
  } catch (error) {
    console.log('Failed to get a user via id')
    throw new Error('Failed to get a user via id')
  }
  
}

export async function isHeNew(id: string) {
  unstable_noStore()

  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

  try {
    const r = await sql`SELECT * FROM person WHERE id=${id}`
    if (r.length === 0) {
      return true
    } else {
      return false
    }
    
  } catch (error) {
    console.log('Failed to check is He new')
    throw new Error('Failed to check is He new')
  }
  
}

// export async function getUserByPseudonim(pseudonim: string) {
//   try {
//     const r = await pool.query('SELECT * FROM person WHERE pseudonim=$1', [pseudonim])
//     return r.rows[0]
//   } catch (error) {
//     console.log('Failed to get user by pseudonim')
//   }
// }

export async function getUserViaPseudonim(pseudonim: string | any) {
  unstable_noStore()
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')
  try {
    const data: any =
      await sql`SELECT * FROM person WHERE pseudonim=${pseudonim}`
    return data[0]
  } catch (error) {
    console.log(error)
    console.log('Failed to get user via pseudonim')
  }
}

export async function insertPerson(
  pseudonim: string,
  password: string,
  uuid: string
) {
  unstable_noStore()
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')
  try {
    const r =
      await sql`INSERT INTO person (id, pseudonim, password) VALUES (${uuid}, ${pseudonim}, ${password})`
    return true
  } catch (error) {
    console.log('Failed to insert person at insertPerson()')
    console.log(error)
    return false
  }
}

export async function isPseudonimAvailable(pseudonim: string) {
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')
  try {
    const r = await sql`SELECT * FROM person WHERE pseudonim=${pseudonim}`
    if (r.length >= 1) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('Failed to check available pseudonim')
    throw new Error('Failed to check available pseudonim')
  }
}
