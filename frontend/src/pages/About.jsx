import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8'>
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] rounded-lg shadow-md' src={assets.about_img} alt="About Lumina" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-base leading-relaxed'>
            Welcome to <span className='font-semibold text-gray-800'>Lumina</span>, where fashion meets elegance. Founded with a passion for style and quality, we curate premium collections that empower you to express your unique personality through timeless designs.
          </p>
          <p className='text-base leading-relaxed'>
            From everyday essentials to statement pieces, every item in our collection is carefully selected to ensure exceptional quality, comfort, and style. We believe that great fashion should be accessible, sustainable, and inspiring.
          </p>
          <div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Our Mission</h3>
            <p className='text-base leading-relaxed'>
              To redefine online fashion shopping by delivering curated collections that combine premium quality, timeless design, and unmatched customer experience—making style effortless for everyone.
            </p>
          </div>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border border-gray-200 rounded-lg px-10 md:px-12 py-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
          <h4 className='text-base font-semibold text-gray-800'>Quality Assurance</h4>
          <p className='text-gray-600 leading-relaxed'>
            Every product undergoes rigorous quality checks to ensure you receive only the finest materials and craftsmanship. We partner with trusted manufacturers who share our commitment to excellence.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg px-10 md:px-12 py-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
          <h4 className='text-base font-semibold text-gray-800'>Convenience</h4>
          <p className='text-gray-600 leading-relaxed'>
            Shop anytime, anywhere with our user-friendly platform. Enjoy hassle-free browsing, secure checkout, fast shipping, and easy returns designed around your lifestyle.
          </p>
        </div>

        <div className='border border-gray-200 rounded-lg px-10 md:px-12 py-12 flex flex-col gap-4 bg-white shadow-sm hover:shadow-md transition-shadow'>
          <h4 className='text-base font-semibold text-gray-800'>Exceptional Customer Service</h4>
          <p className='text-gray-600 leading-relaxed'>
            Our dedicated support team is here to assist you every step of the way. From styling advice to order tracking, we're committed to making your shopping experience seamless and enjoyable.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About