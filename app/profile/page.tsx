import { auth } from "@/auth"
import Form from "../ui/profile/form"
import Link from "next/link"
import { getUserViaId } from "../lib/actions"

export default async function Page() {
  const session = await auth()
  const user = await getUserViaId(session?.user?.id)
  console.log(user)
  
  return (
    <div>
      <div className='flex gap-4 mt-6 mb-6'>
        <Link className='bg-stone-600 py-0.5 px-1 rounded-md hover:bg-stone-400' href='/login'>login</Link>
        <Link className='bg-stone-600 py-0.5 px-1 rounded-md hover:bg-stone-400' href='/signup'>signup</Link>
        <Link className='bg-stone-600 py-0.5 px-1 rounded-md hover:bg-stone-400' href='/auth-test'>auth test</Link>
      </div>
      
      {/* seen zone */}
      <div className='grid grid-cols-4 grid-rows-4 py-4 px-8 rounded-xl border border-slate-500'>
        <div className='mb-2 col-start-1 col-span-1'>
          <span className='mr-1 text-stone-400'>Name:</span>
          <span className="text-stone-200">{user.name ? user.name : 'not-assigned'}</span>
        </div>
        <div className='mb-2 row-start-2 col-span-1'>
          <span className='mr-1 text-stone-400'>Pseudonim:</span>
          <span className="text-stone-200">{user.pseudonim ? user.pseudonim : 'not-assigned'}</span>
        </div>
        <div className='mb-2 row-start-3 col-span-1'>
          <span className='mr-1 text-stone-400'>Id:</span>
          <span className="text-stone-200">{user.id ? user.id : 'not-assigned'}</span>
        </div>
      </div>

      <div className='h-[1.5px] bg-stone-400 mt-2 mb-2'></div>

      {/* settings zone */}
      <Form name={user.name} pseudonim={user.pseudonim} id={user.id}  />
    </div>
  )
}
