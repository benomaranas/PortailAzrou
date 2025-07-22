import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Department</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our municipal departments and schedule your appointment hassle-free.</p>
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
                {specialityData.map((item, index) => (
                    <Link 
                        onClick={() => scrollTo(0, 0)} 
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
                        to={`/doctors/${item.speciality}`} 
                        key={index}
                    >
                        <img 
                            className='w-16 sm:w-24 mb-2' 
                            src={item.image} 
                            alt={item.speciality}
                            onError={(e) => {
                                // Fallback if image fails to load
                                e.target.style.display = 'none';
                                const fallback = e.target.nextSibling;
                                if (fallback) fallback.style.display = 'flex';
                            }}
                        />
                        {/* Fallback icon */}
                        <div 
                            className='w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-2xl mb-2' 
                            style={{display: 'none'}}
                        >
                            {item.speciality.charAt(0)}
                        </div>
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu