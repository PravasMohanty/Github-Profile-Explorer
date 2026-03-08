import Link from 'next/link';

import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const userNameArray = ['torvalds', 'gaearon', 'sindresorhus']
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900" >

      <div>
        <h1 className='text-5xl font-bold text-white' >GitHub Profile Explorer</h1>
        <p className=' text-gray-400 mt-2 '>Find the stats of your GitHub Profile</p>
      </div>

      <SearchBar />

      <div className='mt-8 text-center'>
        <p className='text-gray-600 text-sm mb-3'>Try Searching For</p>
        <div className='flex gap-2'>
          {userNameArray.map((gituser) => (
            <Link key={gituser} href={`/user/${gituser}`}>
              <h1>{gituser}</h1>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}