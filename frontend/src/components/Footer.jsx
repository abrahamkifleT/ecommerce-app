import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Lumina Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Lumina is your destination for premium fashion that blends timeless elegance with modern comfort. We curate collections that empower you to express your unique style with confidence.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
            <li className='hover:text-gray-800 transition-colors'>Home</li>
            <li className='hover:text-gray-800 transition-colors'>About Us</li>
            <li className='hover:text-gray-800 transition-colors'>Delivery</li>
            <li className='hover:text-gray-800 transition-colors'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1 (555) 123-4567</li>
            <li>support@lumina.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className='border-gray-200' />
        <p className='py-5 text-sm text-center text-gray-600'>Copyright 2026 Lumina.com - All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer