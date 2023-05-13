import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-4'>
      <div className='py-2 flex flex-row justify-between border-b-2'>
        <h1 className='text-4xl'>Personalized Grading Assistant - <span className='italic'>Teacher</span></h1>
      </div>
      <div>
        <div className='py-4 flex flex-row justify-between'>
          <h1 className='text-3xl'>Lessons Archive</h1>
          <button className='p-3 bg-yellow-400 hover:bg-yellow-500'>
            <Link href='/new'>
              Create New Lesson
            </Link>
          </button>
        </div>
        <div>
          List of the generated lessons so far here....
        </div>
      </div>
    </div>
  )
}
