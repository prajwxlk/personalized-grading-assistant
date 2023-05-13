import Link from 'next/link'

export default function NavigationStudent() {
  return (
    <div className='py-2 flex flex-row justify-between border-b-2'>
      <Link href="/">
        <h1 className='text-4xl'>Personalized Grading Assistant - <span className='italic'>Student</span></h1>
      </Link>
    </div>
  )
}
