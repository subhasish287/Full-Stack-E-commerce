import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/frontend_assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'
function About() {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis iste sunt architecto aut nulla molestiae ipsum maxime accusamus temporibus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit perferendis sequi aperiam pariatur numquam velit ea, ducimus eaque fugiat, dolor repellat eligendi aliquid culpa cum vel provident, ut deserunt.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum debitis minus ex! Eligendi, facilis. Quam perferendis temporibus tempora quod? Magni.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sunt consectetur qui dolorem, quasi minima repudiandae molestiae itaque blanditiis sequi?</p>
        </div>
        <div className='border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sunt consectetur qui dolorem, quasi minima repudiandae molestiae itaque blanditiis sequi?</p>
        </div>
        <div className='border md:px-16 py-8 sm:py-15 sm:px-4 flex flex-col gap-5'>
            <b>Exceptional Customer service:</b>
            <p className='text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sunt consectetur qui dolorem, quasi minima repudiandae molestiae itaque blanditiis sequi?</p>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default About