import React from 'react'

const container = ( {children} ) => {
  return (
    <div className='flex min-h-screen max-w-7xl mx-auto border'>
      {children}
    </div>
  )
}

export default container
