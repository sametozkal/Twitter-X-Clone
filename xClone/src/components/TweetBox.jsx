import React, { useEffect } from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icon/Icon'

const TweetBox = () => {
  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
      <textarea 
      className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' 
      placeholder='Ne Hissediyorsun..'
      />
      <div 
      className='flex items-center justify-between'>
        <div className='flex -ml-4'>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light'>
                <ImageIcon className="w-6 h-6 text-primary-base"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light'>
                <GIFIcon className="w-6 h-6 text-primary-base"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light'>
                <PollIcon className="w-6 h-6 text-primary-base"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light'>
                <EmojiIcon className="w-6 h-6 text-primary-base"/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-light'>
                <ScheduleIcon className="w-6 h-6 text-primary-base"/>
            </div>
        </div>
        <button 
        className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'>
            Tweet</button>
      </div>
    </div>
  )
}

export default TweetBox
