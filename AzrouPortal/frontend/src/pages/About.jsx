import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>AZROU</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-lg' src='https://picsum.photos/400/300?random=102' alt="Azrou City View" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Azrou Municipality's digital portal, your comprehensive gateway to municipal services and community engagement. Located in the heart of the Middle Atlas Mountains, Azrou is a vibrant city known for its rich Berber heritage, beautiful cedar forests, and thriving community.</p>
          <p>Our municipality is committed to excellence in public service delivery. We continuously strive to modernize our services, integrating digital solutions to improve citizen experience and deliver efficient municipal services. Whether you're scheduling an appointment, reporting an issue, or accessing city information, we're here to serve you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a smart, sustainable, and inclusive city where every citizen has easy access to quality municipal services. We aim to bridge the gap between government and citizens, making it easier for you to access the services you need, when you need them.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE OUR SERVICES</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling and service delivery that respects your time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>TRANSPARENCY: </b>
          <p>Clear processes, real-time updates, and open communication about city services.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>ACCESSIBILITY:</b>
          <p>Digital and physical access to municipal services for all citizens of Azrou.</p>
        </div>
      </div>

    </div>
  )
}

export default About
