import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-4'>
      <div className='py-2 flex flex-row justify-between border-b-2'>
        <h1 className='text-4xl'>Personalized Grading Assistant</h1>
      </div>
      <div className='flex flex-col gap-3 p-4'>
        <Link href='/teacher'>
          <button className='p-3 w-full bg-yellow-400 hover:bg-yellow-500'>
            Teacher's Dashboard
          </button>
        </Link>
        <Link href='/student'>
          <button className='p-3 w-full bg-yellow-400 hover:bg-yellow-500'>
            Student's Dashboard
          </button>
        </Link>
      </div>
    </div>
  )
}
