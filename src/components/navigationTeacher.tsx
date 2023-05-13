import Link from 'next/link'

export default function NavigationTeacher() {
  return (
    <div className='py-2 flex flex-row justify-between border-b-2'>
      <Link href="/">
        <h1 className='text-4xl'>Personalized Grading Assistant - <span className='italic'>Teacher</span></h1>
      </Link>
      <div className='flex flex-row gap-2'>
        <button className='p-3 bg-yellow-400 hover:bg-yellow-500'>
          <Link href='/teacher/new'>Create New Lesson</Link>
        </button>
        <button className='p-3 bg-yellow-400 hover:bg-yellow-500'>
          <Link href='/teacher'>Lesson Archive</Link>
        </button>
      </div>
    </div>
  )
}
