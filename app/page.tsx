import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' flex items-center h-full justify-center'>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
