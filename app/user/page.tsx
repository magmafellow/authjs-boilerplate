import { getUserViaPseudonim } from "../lib/actions";

export default async function Page(){
  const user = await getUserViaPseudonim('mazda')

  return (
    <div>
      <div>{user.id}</div>
      <div>{user.pseudonim}</div>
    </div>
  )
}
