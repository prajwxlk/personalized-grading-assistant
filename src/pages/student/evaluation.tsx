import NavigationStudent from '@/components/navigationStudent'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin']
})

export default function evaluation() {
  return (
    <div className='m-4'>
        <div>
            <NavigationStudent/>
        </div>
        <div className='py-3'>
            <h1 className='text-2xl'>Question</h1>
            <div className='py-2 mx-10 flex flex-col gap-2'>
                <p className={`${inter.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ipsum est. Quisque nec diam et turpis elementum interdum sed sed velit. In ut tortor egestas, blandit lectus in, cursus justo. Aenean ultricies, nibh nec aliquam ultrices, massa tortor blandit orci, ac vehicula ipsum enim eget leo. Duis vel dictum eros. Mauris pellentesque purus in erat imperdiet ultricies. Ut dui elit, bibendum ac egestas a, iaculis dignissim orci. Cras molestie vulputate risus at ornare. Duis faucibus metus vitae nulla consectetur viverra. Sed egestas non nibh ac congue. Proin eget lobortis elit.</p>
                <textarea rows={6} className='w-full p-2 border-2 border-black' />
                <div className='flex justify-end'>
                    <button className='p-3 bg-yellow-400 hover:bg-yellow-500'>Evaluate</button>
                </div>
            </div>
        </div>
    </div>
  )
}
