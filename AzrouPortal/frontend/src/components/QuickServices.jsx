import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuickServices = () => {

    const navigate = useNavigate()

    const quickServices = [
        {
            id: 1,
            name: "Birth Certificate",
            department: "Civil Registry",
            available: true,
            fee: "50 MAD",
            processingTime: "2-3 days",
            icon: "👶"
        },
        {
            id: 2,
            name: "Business License",
            department: "Economic Development", 
            available: true,
            fee: "300 MAD",
            processingTime: "5-7 days",
            icon: "🏪"
        },
        {
            id: 3,
            name: "Building Permit",
            department: "Urban Planning",
            available: true,
            fee: "200 MAD",
            processingTime: "10-15 days",
            icon: "🏗️"
        },
        {
            id: 4,
            name: "Water Connection",
            department: "Public Works",
            available: true,
            fee: "100 MAD",
            processingTime: "3-5 days",
            icon: "💧"
        },
        {
            id: 5,
            name: "Property Tax Payment",
            department: "Finance",
            available: true,
            fee: "Variable",
            processingTime: "Same day",
            icon: "🏠"
        },
        {
            id: 6,
            name: "Health Inspection",
            department: "Health",
            available: true,
            fee: "75 MAD",
            processingTime: "1-2 days",
            icon: "🏥"
        }
    ]

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Popular Services</h1>
            <p className='sm:w-1/3 text-center text-sm'>Quick access to our most requested municipal services.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {quickServices.slice(0, 6).map((service, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/service/${service.id}`); scrollTo(0, 0) }} 
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        <div className='bg-[#EAEFFF] h-32 flex items-center justify-center'>
                            <div className='text-5xl'>{service.icon}</div>
                        </div>
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm text-center ${service.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${service.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                                <p>{service.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-[#262626] text-lg font-medium'>{service.name}</p>
                            <p className='text-[#5C5C5C] text-sm'>{service.department}</p>
                            <div className='flex justify-between items-center mt-2 text-xs'>
                                <span className='text-primary font-medium'>{service.fee}</span>
                                <span className='text-gray-500'>{service.processingTime}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => { navigate('/services'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>View All Services</button>
        </div>
    )
}

export default QuickServices
