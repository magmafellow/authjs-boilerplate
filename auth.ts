import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { signInSchemaCredentials } from './app/lib/defenitions'
import PostgresAdapter from '@auth/pg-adapter'
import { getUserViaPseudonim } from './app/lib/actions'
import Discord from 'next-auth/providers/discord'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord,
    GitHub,
    Credentials({
      async authorize(credentials) {
        const parsed = signInSchemaCredentials.safeParse(credentials)

        if (parsed.success) {
          // const user = await getUserViaPseudonim(credentials.pseudonim)

          if (user) {
            const {password} = parsed.data
            const passwordsMatch = user.password === password


            if (passwordsMatch) {
              return user
            }
          } else {
            return null
          }
        } else {
          throw new Error('Not correct credentials')
        }
      },
    }),
  ],
})
