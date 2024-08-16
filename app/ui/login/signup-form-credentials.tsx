'use client'

import { signupWithCredentials } from '@/app/lib/actions'
import Link from 'next/link'
import { useFormState } from 'react-dom'

export default function SignupForm() {
  const [message, dispatch] = useFormState(signupWithCredentials, undefined)

  return (
    <div>
      <form action={dispatch}>
        <div className="mb-4">
          <div>
            <label htmlFor="pseudonim" className="text-gray-400">
              pseudonim
            </label>
          </div>
          <div>
            <input
              className="border border-gray-500 dark:border-gray-300 rounded-md py-0.5 px-2 text-lg"
              type="text"
              id="pseudonim"
              name="pseudonim"
            />
          </div>
        </div>
        <div className='mb-4'>
          <div>
            <label htmlFor="password" className="text-gray-400">
              password
            </label>
          </div>
          <div className="mb-2">
            <input
              className="border border-gray-500 dark:border-gray-300 rounded-md py-0.5 px-2 text-lg"
              type="text"
              id="password"
              name="password"
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label htmlFor="password_repeat" className="text-gray-400">
              password repeat
            </label>
          </div>
          <div className="mb-2">
            <input
              className="border border-gray-500 dark:border-gray-300 rounded-md py-0.5 px-2 text-lg"
              type="text"
              id="password_repeat"
              name="password_repeat"
            />
          </div>
          <div className="text-right text-sm dark:text-gray-300 dark:hover:text-green-300">
            <Link
              className="hover:underline tracking-wider underline-offset-4"
              href="/login"
            >
              login
            </Link>
          </div>
        </div>
        <div>
          {message?.error?.passwordsDontMatch && <p className='mb-2 text-sm text-red-700'>Passwords you provided dont match</p>}
        </div>
        <div className="pl-4">
          <button className="bg-purple-500 text-white hover:bg-red-800 rounded py-0.5 px-3 hover:translate-x-2 transition">
            signup
          </button>
        </div>
      </form>
    </div>
  )
}
