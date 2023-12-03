import React from 'react'
import { SearchIcon } from '../icon/Icon'
import { Timeline } from 'react-twitter-widgets'

const widget = () => {
  return (
    <aside className='w-80 hidden xl:block'>
        <div className='flex items-center bg-gray-200 space-x-3 mt-4 m-2 p-4 rounded-full focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
          <SearchIcon className="w-5 h-5"/>
          <input type="text" placeholder='Ara..' className='bg-gray-200 bg-transparent focus:outline-none w-full text-sm'/>
        </div>
      <div className='mt-4'>
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'lokmanhekimuni'
  }}
  options={{
    height: '1000'
  }}
/>
      </div>
    </aside>
  )
}

export default widget
