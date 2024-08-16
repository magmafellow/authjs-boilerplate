'use client'

import { updateProfile } from '@/app/lib/actions'
import { useFormState } from 'react-dom'

export default function Form({
  name,
  pseudonim,
  id,
}: {
  name: string
  pseudonim: string
  id: string
}) {

  const boundUpdateProfile = updateProfile.bind(undefined, id)
  
  const [messageInfo, dispatch] = useFormState(boundUpdateProfile, undefined)

  return (
    <form
      action={dispatch}
      className="grid grid-cols-3 grid-rows-4 py-4 px-8 rounded-xl border border-slate-500"
    >
      <div className="mb-2 col-start-1 col-span-1">
        <label htmlFor="name" className="mr-1 text-stone-400">
          Name:
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          className="ml-4 py-0.5 px-2 text-stone-200 bg-zinc-900 border border-slate-400 rounded-md"
        />
      </div>
      <div className="mb-2 row-start-2 col-span-1">
        <label htmlFor="pseudonim" className="mr-1 text-stone-400">
          Pseudonim:
        </label>
        <br />
        <input
          type="text"
          id="pseudonim"
          name="pseudonim"
          defaultValue={pseudonim}
          className="ml-4 py-0.5 px-2 text-stone-200 bg-zinc-900 border border-slate-400 rounded-md"
        />
      </div>
      <div className="mb-2 row-start-3 col-span-1">
        <label htmlFor="id" className="mr-1 text-stone-400">
          Id:
        </label>
        <br />
        <input
          type="text"
          id="id"
          name="id"
          defaultValue={id}
          className="ml-4 py-0.5 px-2 text-stone-200 bg-zinc-900 border border-slate-400 rounded-md"
        />
      </div>
      <div className="mb-2 row-start-4 col-span-1">
        <button
          className=" bg-emerald-600 text-white py-0.5 px-1 rounded-md hover:translate-x-1 transition"
          type="submit"
        >
          submit
        </button>
      </div>
      <div className="mb-2 row-start-1 col-start-2 col-span-1">
        { messageInfo?.error?.notCorrectValues && <p className='text-red-500 mb-2'>You provided not correct values</p> }
        { messageInfo?.message && <p className='text-green-500 mb-2'>Everything went well! Data updated</p> }
      </div>
    </form>
  )
}
