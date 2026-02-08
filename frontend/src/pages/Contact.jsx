import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10'>
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-lg shadow-md' src={assets.contact_img} alt="Contact Lumina" />

        <div className='flex flex-col justify-center items-start gap-8'>
          {/* Store Information */}
          <div className='space-y-2'>
            <h3 className='font-semibold text-xl text-gray-800'>Our Store</h3>
            <p className='text-gray-600 leading-relaxed'>
              123 Fashion Avenue<br />
              New York, NY 10001<br />
              United States
            </p>
            <p className='text-gray-600'>
              <span className='font-medium'>Phone:</span> +1 (555) 123-4567
            </p>
            <p className='text-gray-600'>
              <span className='font-medium'>Email:</span> support@lumina.com
            </p>
          </div>

          {/* Careers Section */}
          <div className='space-y-2'>
            <h3 className='font-semibold text-xl text-gray-800'>Careers at Lumina</h3>
            <p className='text-gray-600 leading-relaxed max-w-md'>
              Join our passionate team and help shape the future of fashion. We're always looking for talented individuals who share our commitment to style and excellence.
            </p>
            <button className='mt-2 border-2 border-gray-800 px-8 py-3 text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-md'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact