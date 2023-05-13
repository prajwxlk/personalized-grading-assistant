import NavigationTeacher from '@/components/navigationTeacher'
import { Inter, Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400'
})

export default function New() {
    return (
        <div className='m-4'>
            <NavigationTeacher/>
            <div className='py-4 flex flex-row justify-between'>
                <h1 className='text-3xl'>Create New Lesson</h1>
            </div>
            <div className='mx-10'>
                <div className='py-2 flex flex-row gap-2 place-items-center'>
                    <h1 className='text-xl'>Lesson Name : </h1>
                    <input type='text' className='p-1 border-2 ' />
                </div>
                <div className='py-2 flex flex-row gap-2 place-items-center'>
                    <h1 className='text-xl'>Grade : </h1>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>A+</option>
                                <option>B+</option>
                                <option>C+</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='py-2 flex flex-row gap-2 place-items-center'>
                    <h1 className='text-xl'>Difficulty : </h1>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>Tough</option>
                                <option>Hard</option>
                                <option>Medium</option>
                                <option>Easy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='py-2 flex flex-row gap-2 place-items-center'>
                    <h1 className='text-xl'>Types of Questions : </h1>
                    <div className="sm:col-span-3">
                        <div className="mt-2">
                            <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>MCQs</option>
                                <option>Short Answer</option>
                                <option>Long Answer</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="mt-2 w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                            </svg>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className='flex py-2 justify-end'>
                    <button className='p-2 px-6 border bg-yellow-400 hover:bg-yellow-500'>Create Lesson</button>
                </div>
            </div>
        </div>
    )
}
