'use client'

import { useState } from 'react'
import LoginFormCredentials from '../ui/login/login-form-credentials'
import ThemeToggle from '../ui/toggle-theme-mode'
import { FaGithubAlt } from 'react-icons/fa6'
import { TbPassword } from 'react-icons/tb'
import clsx from 'clsx'
import LoginFormGitHub from '../ui/login/login-form-github'
import { FaDiscord } from 'react-icons/fa'
import LoginFormDiscord from '../ui/login/login-form-discord'
import Link from 'next/link'

export default function Page() {
  // loginMethod: 'github' | 'credentials'
  const [loginMethod, setLoginMethod] = useState('github')

  return (
    <div className="h-screen dark:bg-[#121212] bg-[#d3d3d3]">
      <h1 className="text-center w-full text-2xl absolute top-20 left-0">
        Login
      </h1>

      <div className="text-center text-sm text-stone-500 w-full absolute -translate-y-2 left-0 top-32">
        Choose login method
      </div>
      <div className="flex gap-4 text-4xl justify-center absolute w-full left-0 top-36">
        <FaDiscord
          className={clsx(
            'cursor-pointer rounded-full p-1',
            getStylesIcon('discord', loginMethod)
          )}
          onClick={() => {
            setLoginMethod('discord')
          }}
        />
        <FaGithubAlt
          className={clsx(
            'cursor-pointer rounded-full p-1',
            getStylesIcon('github', loginMethod)
          )}
          onClick={() => {
            setLoginMethod('github')
          }}
        />
        <TbPassword
          className={clsx(
            'cursor-pointer rounded-full p-1',
            getStylesIcon('credentials', loginMethod)
          )}
          onClick={() => {
            setLoginMethod('credentials')
          }}
        />
      </div>

      <div className="flex justify-center items-center h-full">
        {loginMethod === 'discord' && <LoginFormDiscord />}
        {loginMethod === 'github' && <LoginFormGitHub />}
        {loginMethod === 'credentials' && <LoginFormCredentials />}
      </div>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="text-sm absolute left-4 top-4">
        <Link
          className="bg-emerald-900 text-white rounded-lg py-0.5 px-1"
          href="/auth-test"
        >
          auth-test
        </Link>
      </div>
    </div>
  )
}

function getStylesIcon(signature: string, loginMethod: string) {
  return {
    'text-stone-500': loginMethod === signature,
    'text-slate-100': loginMethod !== signature,
    border: loginMethod === signature,
    'border-gray-600': loginMethod === signature,
  }
}
