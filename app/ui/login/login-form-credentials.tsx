'use client'

import { loginWithCredentials } from "@/app/lib/actions";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { IoEye } from "react-icons/io5";

export default function LoginFormCredentials() {
  const [infoMessage, dispatch] = useFormState(loginWithCredentials, undefined)
  const [hiddenPassword, setHiddenPassword] = useState(true)
  
  return (
    <div>
      <form action={dispatch}>
        <div className='mb-4'>
          <div>
            <label htmlFor="pseudonim" className='text-gray-800 dark:text-gray-400'>pseudonim</label>
          </div>
          <div>
            <input className='border border-gray-300 rounded-md py-0.5 px-2 text-lg' type="text" id="pseudonim" name="pseudonim" />
          </div>
        </div>
        <div className='mb-6'>
          <div>
            <label htmlFor="password" className='text-gray-800 dark:text-gray-400'>password</label>
          </div>
          <div className='mb-2 relative'>
            <input className='border border-gray-300 rounded-md py-0.5 px-2 text-lg' type="text" id="password" name="password" />
            <div className='absolute top-2 left-44'><IoEye /></div>
          </div>
          <div className='text-sm flex justify-between dark:text-gray-300 dark:hover:text-green-300'>Are you new? <Link className='hover:underline tracking-wider underline-offset-4' href='/signup'>signup</Link></div>
        </div>
        <div className='pl-4'>
          <button className='bg-sky-500 text-white hover:bg-gray-800 rounded py-0.5 px-3 hover:translate-x-2 transition'>login</button>
        </div>
      </form>
    </div>
  )
}
