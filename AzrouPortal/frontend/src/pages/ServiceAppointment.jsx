import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'

const ServiceAppointment = () => {

    const { serviceId } = useParams()
    const { token, userData, backendUrl } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    const navigate = useNavigate()

    // Service data mapped from department IDs
    const servicesByDepartment = {
        "1": [
            {
                id: "1",
                name: "Birth Certificate",
                department: "Civil Registry",
                description: "Official birth certificate issuance and verification",
                fee: 50,
                processingTime: "2-3 days",
                requirements: ["Valid ID", "Birth notification from hospital", "Parent's marriage certificate"],
                available: true,
                icon: "👶"
            },
            {
                id: "1_2",
                name: "Marriage License",
                department: "Civil Registry", 
                description: "Marriage certificate and license services",
                fee: 75,
                processingTime: "1-2 days",
                requirements: ["Valid IDs of both parties", "Birth certificates", "Divorce decree (if applicable)"],
                available: true,
                icon: "💒"
            }
        ],
        "2": [
            {
                id: "2",
                name: "Building Permit",
                department: "Urban Planning",
                description: "Construction and building permit applications",
                fee: 200,
                processingTime: "5-7 days", 
                requirements: ["Architectural plans", "Land ownership documents", "Environmental impact study"],
                available: true,
                icon: "🏗️"
            }
        ],
        "3": [
            {
                id: "3",
                name: "Property Tax Payment",
                department: "Finance Department",
                description: "Property tax assessment and payment services",
                fee: 0,
                processingTime: "Same day",
                requirements: ["Property deed", "Previous tax receipts", "Valid ID"],
                available: true,
                icon: "💰"
            }
        ],
        "4": [
            {
                id: "4",
                name: "Road Repair Request",
                department: "Public Works",
                description: "Request for road maintenance and repairs",
                fee: 0,
                processingTime: "7-14 days",
                requirements: ["Location details", "Photos of damage", "Contact information"],
                available: true,
                icon: "🚧"
            }
        ],
        "5": [
            {
                id: "5",
                name: "Social Assistance",
                department: "Social Services",
                description: "Social support and assistance program application",
                fee: 0,
                processingTime: "3-5 days",
                requirements: ["Income statement", "Family composition", "Valid ID"],
                available: true,
                icon: "🤝"
            }
        ],
        "6": [
            {
                id: "6",
                name: "Environmental Permit",
                department: "Environmental Services",
                description: "Environmental compliance and permit applications",
                fee: 150,
                processingTime: "7-10 days",
                requirements: ["Environmental impact assessment", "Business registration", "Technical specifications"],
                available: true,
                icon: "�"
            }
        ]
    }

    // Find the service or default to first service
    const findService = () => {
        // First check if serviceId matches a specific service
        for (const deptServices of Object.values(servicesByDepartment)) {
            const service = deptServices.find(s => s.id === serviceId)
            if (service) return service
        }
        
        // If not found, get first service from the department
        const deptServices = servicesByDepartment[serviceId]
        if (deptServices && deptServices.length > 0) {
            return deptServices[0]
        }
        
        // Default fallback
        return servicesByDepartment["1"][0]
    }

    const [serviceInfo] = useState(findService())
    const [serviceSlots, setServiceSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')

    const getAvailableSlots = async () => {
        setServiceSlots([])

        // Get current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // Getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            // Setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(17, 0, 0, 0)

            // Setting hours  
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 9 ? currentDate.getHours() + 1 : 9)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(9)
                currentDate.setMinutes(0)
            }

            let timeSlots = []

            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

                let day = currentDate.getDate()
                let month = currentDate.getMonth() + 1
                let year = currentDate.getFullYear()

                const slotDate = day + "_" + month + "_" + year
                const slotTime = formattedTime

                const isSlotAvailable = true // In a real app, check against booked appointments

                if (isSlotAvailable) {
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime
                    })
                }

                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setServiceSlots(prev => ([...prev, timeSlots]))
        }
    }

    const bookAppointment = async () => {
        if (!token) {
            toast.warn('Login to book appointment')
            return navigate('/login')
        }

        if (!slotTime) {
            return toast.warn('Select Time Slot')
        }

        try {
            const date = serviceSlots[slotIndex][0].datetime
            
            let day = date.getDate()
            let month = date.getMonth() + 1
            let year = date.getFullYear()
            const slotDate = day + "_" + month + "_" + year

            const requestData = {
                serviceId: serviceInfo.id,
                serviceName: serviceInfo.name,
                serviceDepartment: serviceInfo.department,
                serviceFee: serviceInfo.fee,
                slotDate,
                slotTime
            }

            const { data } = await axios.post(backendUrl + '/api/user/book-service-appointment', requestData, { headers: { token } })
            
            if (data.success) {
                toast.success(data.message)
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    React.useEffect(() => {
        getAvailableSlots()
    }, [serviceInfo])

    React.useEffect(() => {
        console.log(serviceSlots)
    }, [serviceSlots])

    return serviceInfo && (
        <div>
            {/* Service Details */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <div>
                    <div className='bg-primary w-full sm:max-w-72 rounded-lg h-72 flex items-center justify-center text-8xl'>
                        {serviceInfo.icon}
                    </div>
                </div>

                <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

                    {/* Service Info */}
                    <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
                        {serviceInfo.name} 
                        <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{serviceInfo.department}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{serviceInfo.processingTime}</button>
                    </div>

                    {/* Service About */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>
                            About <img className='w-3' src={assets.info_icon} alt="" />
                        </p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{serviceInfo.description}</p>
                    </div>

                    {/* Requirements */}
                    <div className='mt-4'>
                        <p className='text-sm font-medium text-[#262626] mb-2'>Required Documents:</p>
                        <ul className='text-sm text-gray-600 list-disc list-inside'>
                            {serviceInfo.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                            ))}
                        </ul>
                    </div>

                    <p className='text-gray-600 font-medium mt-4'>
                        Service fee: <span className='text-gray-800'>{serviceInfo.fee > 0 ? `${serviceInfo.fee} MAD` : 'Free'}</span>
                    </p>
                </div>
            </div>

            {/* Booking slots */}
            <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
                <p>Available appointment slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {serviceSlots.length && serviceSlots.map((item, index) => (
                        <div 
                            onClick={() => setSlotIndex(index)} 
                            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'}`} 
                            key={index}
                        >
                            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {serviceSlots.length && serviceSlots[slotIndex].map((item, index) => (
                        <p 
                            onClick={() => setSlotTime(item.time)} 
                            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-[#949494] border border-[#B4B4B4]'}`} 
                            key={index}
                        >
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>
                    Book appointment
                </button>
            </div>
        </div>
    )
}

export default ServiceAppointment
