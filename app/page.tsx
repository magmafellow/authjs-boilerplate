import { auth } from '@/auth'
import { roboto } from './ui/fonts/roboto'
import { logout } from './lib/actions'
import Link from 'next/link'

export default async function Page() {
  const session = await auth()
  console.log(session)

  return (
    <div>
      <div>Welcome Dear</div>
      <p>Auth and some other staff are already built.</p>
      <p>You have just to configure this</p>
    </div>
  )
}
