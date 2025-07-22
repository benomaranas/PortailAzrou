import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded-lg' src='https://picsum.photos/400/300?random=103' alt="Municipality Building" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>AZROU MUNICIPALITY</p>
          <p className=' text-gray-500'>Avenue Mohammed V <br /> Azrou 53100, Morocco</p>
          <p className=' text-gray-500'>Tel: +212 5 35 56 XX XX <br /> Email: contact@azrou.ma</p>
          
          <p className=' font-semibold text-lg text-gray-600'>OFFICE HOURS</p>
          <p className=' text-gray-500'>Monday - Friday: 8:00 AM - 4:00 PM <br /> Saturday: 8:00 AM - 12:00 PM <br /> Sunday: Closed</p>
          
          <p className=' font-semibold text-lg text-gray-600'>EMERGENCY SERVICES</p>
          <p className=' text-gray-500'>For urgent municipal issues outside office hours:</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Emergency Hotline: 190</button>
        </div>
      </div>

      <div className='bg-gray-50 p-8 rounded-lg mb-10'>
        <h3 className='text-xl font-semibold mb-4 text-gray-700'>Department Contact Information</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Civil Registry</h4>
            <p className='text-sm text-gray-600'>Ext: 101</p>
            <p className='text-sm text-gray-600'>civilregistry@azrou.ma</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Urban Planning</h4>
            <p className='text-sm text-gray-600'>Ext: 102</p>
            <p className='text-sm text-gray-600'>urbanplanning@azrou.ma</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Economic Development</h4>
            <p className='text-sm text-gray-600'>Ext: 103</p>
            <p className='text-sm text-gray-600'>business@azrou.ma</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Finance</h4>
            <p className='text-sm text-gray-600'>Ext: 104</p>
            <p className='text-sm text-gray-600'>finance@azrou.ma</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Public Works</h4>
            <p className='text-sm text-gray-600'>Ext: 105</p>
            <p className='text-sm text-gray-600'>publicworks@azrou.ma</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-sm'>
            <h4 className='font-semibold text-primary'>Health Department</h4>
            <p className='text-sm text-gray-600'>Ext: 106</p>
            <p className='text-sm text-gray-600'>health@azrou.ma</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
