import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className='tex-center text-2xl pt-10'>
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'> 123 Market Street, New York, NY 10001</p>
          <p className='text-gray-500'>+1 (123) 456-7890</p>
          <p className=' font-semibold text-xl text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500'>Learn More About our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact