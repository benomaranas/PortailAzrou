import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const BookAppointment = () => {
  const { departments, getDepartmentsData, currencySymbol, backendUrl, token, getUserData } = useContext(AppContext)
  const navigate = useNavigate()

  const [selectedDept, setSelectedDept] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [reason, setReason] = useState('')
  const [loading, setLoading] = useState(false)

  const municipalServices = [
    {
      _id: 'civil-registry',
      name: 'Civil Registry',
      speciality: 'Civil Status',
      image: assets.CivilRegistry,
      about: 'Birth certificates, marriage certificates, death certificates, and other civil documents.',
      fees: 50,
      available: true
    },
    {
      _id: 'urban-planning',
      name: 'Urban Planning',
      speciality: 'City Development',
      image: assets.UrbanPlanning,
      about: 'Building permits, construction licenses, urban development projects.',
      fees: 100,
      available: true
    },
    {
      _id: 'finance',
      name: 'Finance Department',
      speciality: 'Municipal Finance',
      image: assets.Finance,
      about: 'Tax payments, municipal fees, financial consultations.',
      fees: 0,
      available: true
    },
    {
      _id: 'public-works',
      name: 'Public Works',
      speciality: 'Infrastructure',
      image: assets.PublicWorks,
      about: 'Road maintenance, public infrastructure, utility services.',
      fees: 0,
      available: true
    },
    {
      _id: 'health',
      name: 'Health Services',
      speciality: 'Public Health',
      image: assets.Health,
      about: 'Health certificates, vaccination records, health inspections.',
      fees: 30,
      available: true
    },
    {
      _id: 'economic-development',
      name: 'Economic Development',
      speciality: 'Business Services',
      image: assets.EconomicDevelopment,
      about: 'Business licenses, economic development programs, investment opportunities.',
      fees: 75,
      available: true
    }
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  const getNext7Days = () => {
    const days = []
    for (let i = 1; i <= 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.toLocaleDateString('en', { weekday: 'short' }),
        number: date.getDate()
      })
    }
    return days
  }

  const bookAppointment = async () => {
    if (!token) {
      navigate('/login')
      return
    }

    if (!selectedDept || !selectedDate || !selectedTime || !reason.trim()) {
      alert('Please fill all required fields')
      return
    }

    setLoading(true)
    try {
      // This would be your API call to book appointment
      // const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { ... })
      
      // For now, simulate success
      setTimeout(() => {
        alert('Appointment booked successfully!')
        navigate('/my-appointments')
        setLoading(false)
      }, 1000)

    } catch (error) {
      console.log(error)
      alert('Failed to book appointment')
      setLoading(false)
    }
  }

  const selectedService = municipalServices.find(service => service._id === selectedDept)

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Book Appointment with Azrou Municipality</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Schedule a meeting with our municipal departments for various services including civil registry, 
          urban planning, finance, and more.
        </p>
      </div>

      {/* Department Selection */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Select Department</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {municipalServices.map((service) => (
            <div 
              key={service._id}
              onClick={() => setSelectedDept(service._id)}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedDept === service._id 
                  ? 'border-primary bg-primary/10' 
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              <div className='flex items-center gap-3 mb-2'>
                <img src={service.image} alt={service.name} className='w-12 h-12' />
                <div>
                  <h3 className='font-semibold'>{service.name}</h3>
                  <p className='text-sm text-gray-600'>{service.speciality}</p>
                </div>
              </div>
              <p className='text-sm text-gray-700 mb-2'>{service.about}</p>
              <p className='text-sm font-semibold text-primary'>
                {service.fees > 0 ? `Fee: ${currencySymbol}${service.fees}` : 'Free Consultation'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Service Details */}
      {selectedService && (
        <div className='mb-8 p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-lg font-semibold mb-2'>Selected Service: {selectedService.name}</h3>
          <p className='text-gray-600 mb-2'>{selectedService.about}</p>
          <p className='text-primary font-semibold'>
            {selectedService.fees > 0 ? `Service Fee: ${currencySymbol}${selectedService.fees}` : 'Free Service'}
          </p>
        </div>
      )}

      {/* Date Selection */}
      {selectedDept && (
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Select Date</h2>
          <div className='flex gap-3 overflow-x-auto pb-2'>
            {getNext7Days().map((day) => (
              <div
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                className={`min-w-[80px] text-center p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedDate === day.date
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                <p className='text-sm'>{day.day}</p>
                <p className='text-lg font-semibold'>{day.number}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Time Selection */}
      {selectedDate && (
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Select Time</h2>
          <div className='grid grid-cols-3 md:grid-cols-6 gap-3'>
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 border rounded-lg transition-all ${
                  selectedTime === time
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Reason for Visit */}
      {selectedTime && (
        <div className='mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Reason for Visit</h2>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder='Please describe the purpose of your visit...'
            className='w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none'
            rows={4}
            required
          />
        </div>
      )}

      {/* Book Button */}
      {reason.trim() && (
        <div className='text-center'>
          <button
            onClick={bookAppointment}
            disabled={loading}
            className={`px-8 py-3 bg-primary text-white rounded-lg font-semibold transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
            }`}
          >
            {loading ? 'Booking...' : 'Book Appointment'}
          </button>
        </div>
      )}

      {/* Information Box */}
      <div className='mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
        <h3 className='font-semibold text-blue-800 mb-2'>Important Information:</h3>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• Please arrive 10 minutes before your scheduled time</li>
          <li>• Bring all necessary documents related to your request</li>
          <li>• You can reschedule or cancel your appointment up to 2 hours before</li>
          <li>• For urgent matters, please contact us directly</li>
        </ul>
      </div>
    </div>
  )
}

export default BookAppointment
