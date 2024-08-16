import { auth } from '@/auth'
import { roboto } from '../ui/fonts/roboto'
import { getUserViaId, logout } from '../lib/actions'
import Link from 'next/link'

export default async function Page() {
  const session = await auth()
  const user = await getUserViaId(session?.user?.id)

  return (
    <div className={`${roboto.className} py-10 px-20`}>
      {session?.user?.id ? (
        <div>
          Hi there
          <pre className="w-[500px] mb-4 bg-gray-700 rounded-lg py-1 px-2">
            Your id: {JSON.stringify(session?.user?.id)}
            <br />
            Your pseudonim: {JSON.stringify(user.pseudonim)} {/* It is okay */}
            <br />
            Your name: {JSON.stringify(user.name)}
          </pre>
        </div>
      ) : (
        <p className='mb-4'>Oops you are not recognized</p>
      )}

      <form
        action={async () => {
          'use server'
          await logout()
        }}
      >
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 py-0.5 px-1 rounded-md"
        >
          signout
        </button>
      </form>

      <div className='absolute top-4 right-4'>
        <Link className='bg-yellow-400 text-black py-1 px-2 rounded-md' href='/login'>login page</Link>
      </div>
      
    </div>
  )
}
