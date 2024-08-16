import { loginOAuth } from "@/app/lib/actions"

export default function LoginFormDiscord() {
  return (
    <form action={async () => {
      await loginOAuth('discord')
    }}>
      <p className='mb-3'>login with Discord</p>
      <button className='py-0.5 px-2 dark:bg-indigo-600 hover:dark:bg-indigo-500 hover:translate-x-2 transition text-white rounded-md'>log in</button>
    </form>
  )
}
