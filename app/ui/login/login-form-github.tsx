import { loginOAuth } from "@/app/lib/actions"

export default function LoginFormGitHub() {
  return (
    <form action={async () => {
      await loginOAuth('github')
    }}>
      <p className='mb-3'>login with GitHub</p>
      <button className='py-0.5 px-2 dark:bg-blue-600 hover:dark:bg-blue-700 hover:translate-x-2 transition text-white rounded-md'>log in</button>
    </form>
  )
}
