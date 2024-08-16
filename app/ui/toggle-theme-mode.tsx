'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMoonSharp } from 'react-icons/io5'
import { GiUbisoftSun } from 'react-icons/gi'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button type="button">
      {theme === 'light' ? (
        <IoMoonSharp className="text-2xl" onClick={() => setTheme('dark')} />
      ) : (
        <GiUbisoftSun className="text-3xl" onClick={() => setTheme('light')} />
      )}
    </button>
  )
}

export default ThemeToggle
