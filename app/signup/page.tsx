import Link from 'next/link'
import SignupForm from '../ui/login/signup-form-credentials'
import ThemeToggle from '../ui/toggle-theme-mode'

export default function Page() {
  return (
    <div className="h-screen dark:bg-[#121212] bg-white">
      <h1 className="text-center w-full text-2xl absolute top-20 left-0">
        Signup. Welcome!
      </h1>

      <div className="flex justify-center items-center h-full">
        <SignupForm />
      </div>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className='absolute top-4 left-4'>
        <Link href='/auth-test' className='bg-sky-300 text-sky-900 rounded py-0.5 px-1.5'>auth-test</Link>
      </div>
    </div>
  )
}
