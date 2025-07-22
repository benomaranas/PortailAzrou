import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative flex flex-col md:flex-row flex-wrap rounded-lg overflow-hidden min-h-[70vh]'>

            {/* Video Background */}
            <div className='absolute inset-0 w-full h-full'>
                <video 
                    className='w-full h-full object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={assets.header_video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text readability */}
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            </div>

            {/* --------- Header Content --------- */}
            <div className='relative z-10 flex flex-col md:flex-row w-full px-6 md:px-10 lg:px-20'>
                
                {/* --------- Header Left --------- */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                    <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight drop-shadow-lg'>
                        Welcome to <br />  Azrou Municipality
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                        
                        <p className='drop-shadow-md'>Your digital gateway to municipal services, appointments, <br className='hidden sm:block' /> and community engagement in Azrou.</p>
                    </div>
                    <a href='#services' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                        Explore Services <img className='w-3' src={assets.arrow_icon} alt="" />
                    </a>
                </div>

                {/* --------- Header Right - Optional additional content --------- */}
                <div className='md:w-1/2 relative flex items-center justify-center'>
                    {/* You can add additional content here if needed */}
                    <div className='text-center text-white p-8'>
                        <h3 className='text-xl font-semibold mb-4 drop-shadow-md'>Serving Our Community</h3>
                        <p className='text-sm drop-shadow-md opacity-90'>
                            Experience efficient, transparent, and accessible municipal services
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header