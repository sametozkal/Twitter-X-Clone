import React, { useEffect } from 'react'
import { PopulerIcon } from '../icon/Icon';
import TweetBox from '../components/TweetBox';
import Dvider from '../components/Dvider';
const context = () => {

  return (
    <main className='flex-1 flex flex-col border-r border-l border-gray-extraLight'>
      <header className='sticky top-0 z-10 bg-white  flex justify-between items-center p-4 border-b border-gray-extraLight '>
        <span className='text-xl font-bold text-gray-900'>Ana Sayfa</span>
        <PopulerIcon className="w-6 h-6 text-primary-base"/>
      </header>
      <div className='flex px-4 py-2 space-x-4 '>
      <img 
        src="https://media.licdn.com/dms/image/D4D03AQGxnmWM_noWsQ/profile-displayphoto-shrink_800_800/0/1691833512671?e=1706745600&v=beta&t=9CpQZRs0nrZsEM9HGyyIArZnj8W52szuU-QR91EVhzk" 
        alt="" 
        className="w-11 h-11 rounded-full"
        />
          <TweetBox />
     
      </div>
      <Dvider />
    </main>
  )
}

export default context
