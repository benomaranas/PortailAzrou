import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import DemoVideoModal from './DemoVideoModal'

const Banner = () => {

    const navigate = useNavigate()
    const [showVideoModal, setShowVideoModal] = useState(false)

    return (
        <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Schedule Meeting</p>
                    <p className='mt-4'>With Azrou Municipality</p>
                </div>
                <button onClick={() => { navigate('/services'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>View Services</button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-white'>
                    <h3 className='text-xl font-semibold mb-4'>🎥 Watch Our Demo</h3>
                    <p className='text-sm mb-4 opacity-90'>
                        See how our digital municipal platform transforms citizen services with efficiency and transparency.
                    </p>
                    <div className='flex flex-col gap-3'>
                        <button 
                            onClick={() => setShowVideoModal(true)}
                            className='bg-white text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2 justify-center'
                        >
                            ▶️ Watch Demo Video
                        </button>
                        <button 
                            onClick={() => navigate('/about')}
                            className='border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-primary transition-all'
                        >
                            📋 Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Demo Video Modal */}
            <DemoVideoModal 
                isOpen={showVideoModal} 
                onClose={() => setShowVideoModal(false)} 
            />
        </div>
    )
}

export default Banner