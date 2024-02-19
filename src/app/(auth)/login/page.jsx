import { auth, signIn } from '@/lib/auth'
import React from 'react'

export default async function LoginPage() {
const session = await auth()
console.log(session)

  async function handleGithubLogin() {
    "use server"
    await signIn("github")
  }
  return (
    <div>
      <form action={handleGithubLogin}>
        <button className='bg-gray-400 p-5 rounded-md text-stone-900 font-bold '> Login with Github</button>
      </form>
    </div>
  )
}
