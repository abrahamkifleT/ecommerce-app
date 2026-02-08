import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='text-center mb-8'>
      <h2 className='text-3xl md:text-4xl font-bold mb-2'>
        <span className='text-gray-400 font-light'>{text1}</span>
        {' '}
        <span className='text-gray-800'>{text2}</span>
      </h2>
      <div className='flex items-center justify-center gap-2'>
        <div className='w-8 h-px bg-gray-300'></div>
        <div className='w-2 h-2 rotate-45 bg-gray-800'></div>
        <div className='w-8 h-px bg-gray-300'></div>
      </div>
    </div>
  )
}

export default Title