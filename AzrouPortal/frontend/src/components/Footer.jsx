import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Azrou Municipality is committed to providing efficient, transparent, and accessible public services to all residents. We strive to build a smart and sustainable city that serves the needs of our diverse community.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>QUICK LINKS</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Services</li>
            <li>Report Issue</li>
            <li>About Azrou</li>
            <li>Mayor's Office</li>
            <li>City Council</li>
            <li>Public Records</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+212 5 35 56 XX XX</li>
            <li>contact@azrou.ma</li>
            <li>Avenue Mohammed V</li>
            <li>Azrou 53100, Morocco</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Azrou Municipality - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
