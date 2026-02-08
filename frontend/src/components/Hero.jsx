import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col mt-10 sm:flex-row'>
      {/* Hero left side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141] space-y-6'>
          {/* Top accent with text */}
          <div className='flex items-center gap-3'>
            <div className='w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-400'></div>
            <p className="font-medium text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase">Exclusive Collection</p>
          </div>

          {/* Main heading */}
          <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight text-gray-800">
            Discover Your Signature Style
          </h1>

          {/* Bottom CTA */}
          <div className='flex items-center gap-3 group cursor-pointer'>
            <p className='font-semibold text-sm md:text-base tracking-wider text-gray-700 group-hover:text-gray-900 transition-colors'>SHOP NOW</p>
            <div className='w-12 h-[1px] bg-gradient-to-r from-gray-700 to-transparent group-hover:w-16 transition-all duration-300'></div>
          </div>
        </div>
      </div>

      {/* Hero right side */}

      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero