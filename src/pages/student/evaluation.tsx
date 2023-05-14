import NavigationStudent from '@/components/navigationStudent'
import { Inter } from 'next/font/google'
import { collection, doc, getDocs, getFirestore, limit, orderBy, query } from 'firebase/firestore';
import { FirebaseAppProvider, FirestoreProvider, useFirestoreDocData, useFirestore, useFirestoreCollectionData, useSigninCheck } from 'reactfire';
import { db } from '../_app';
import { useState } from 'react';
import YouTube from "react-youtube";

const inter = Inter({
    subsets: ['latin']
})

export default function evaluation() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [solution, setSolution] = useState("");
    const [lessonName, setLessonName] = useState("");
    const [youtubeSuggestions, setYoutubeSuggestions] = useState([]);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const updateAnswer = (event: any) => {
        setAnswer(event.target.value);
    }

    function handleFileSelection(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        console.log("file : ", file);
        if (file) {
            setSelectedFile(file);
          }        
        console.log("selectedFile : ", selectedFile);
    }

    async function getLessons() {
        const lessonsRef = collection(db, "lessons");
        const q = query(lessonsRef, orderBy('time', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);
        const docSnapshot = querySnapshot.docs[0];
        console.log("docSnapshot : ", docSnapshot);

        const data = docSnapshot.data();
        console.log("data : ", JSON.stringify(data));
        setQuestion(data.question);
        console.log("new data " + question);
        setLessonName(data.lessonName);
    }

    getLessons();

    function evaluate() {
        try {
            fetch('/api/openaiStudent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question: question,
                    answer: answer
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setSolution(data.responseData);
                })
        } catch (error) {
            console.error(error)

        }

        try {
            console.log("lessonName : ", lessonName)
            fetch(`https://warpspeedapi.herokuapp.com/getYoutubeLinks?query=${lessonName}`, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    console.log("getYoutbeLinks Data ; ", data);
                    setYoutubeSuggestions(data);
                })
        } catch (error) {
            console.error(error)

        }
    }

    return (
        <div>
            <div className='m-4'>
                <div>
                    <NavigationStudent />
                </div>
                <div className='py-3'>
                    <h1 className='text-2xl'>Question</h1>
                    <div className='py-2 mx-10 flex flex-col gap-2'>
                        <p className={`${inter.className}`}> {question}</p>
                        <textarea placeholder='Write your solution....' value={answer} onChange={updateAnswer} rows={6} className='w-full p-2 border-2 border-black' />
                        <div className='flex justify-center'>
                        <h1 className='text-3xl'>OR</h1>
                        </div>
                        <div className='flex justify-center'>
                            <div className="mt-2 w-full flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload your solution</span>
                                            <input type="file" className="sr-only" onChange={handleFileSelection}></input>
                                        </label>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={evaluate} className='p-3 px-10 bg-yellow-400 hover:bg-yellow-500'>Evaluate</button>
                        </div>
                    </div>
                    <h1 className='text-3xl'>Answers</h1>
                    <p>{solution}</p>
                    <h1 className='text-2xl'>Youtube Suggestions : </h1>
                    <p>{youtubeSuggestions}</p>
                </div>
            </div>
        </div>
    )
}
