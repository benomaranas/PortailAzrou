import React from 'react'
import { Link } from 'react-router-dom'
import { departmentData } from '../assets/assets'

const ServicesMenu = () => {
    
    // Define emoji fallbacks for each service
    const serviceEmojis = {
        'Civil Registry': '📋',
        'Urban Planning': '🏗️',
        'Economic Development': '💼',
        'Finance': '💰',
        'Public Works': '🔧',
        'Health': '🏥'
    };

    return (
        <div id='services' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Municipal Services</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through our comprehensive range of municipal services and schedule appointments with the relevant departments.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {departmentData.map((item, index) => (
                    <Link 
                        to={`/services/${item.department}`} 
                        onClick={() => scrollTo(0, 0)} 
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        <div className='w-16 h-16 sm:w-24 sm:h-24 bg-gradient-primary rounded-full mb-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300'>
                            {/* Try to load the SVG image first */}
                            {item.image && item.image.startsWith('data:') ? (
                                <img 
                                    className='w-8 h-8 sm:w-12 sm:h-12 filter brightness-0 invert' 
                                    src={item.image} 
                                    alt={item.department}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            ) : null}
                            {/* Fallback emoji */}
                            <span className='text-2xl sm:text-3xl text-white'>
                                {serviceEmojis[item.department] || '🏛️'}
                            </span>
                        </div>
                        <p className='text-center font-medium text-gray-700'>{item.department}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ServicesMenu
