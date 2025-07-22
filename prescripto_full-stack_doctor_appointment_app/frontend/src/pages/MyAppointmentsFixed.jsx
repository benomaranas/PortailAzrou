import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [payment, setPayment] = useState('')

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = async () => {
        try {
            console.log('Fetching appointments with token:', token ? 'Token exists' : 'No token');
            console.log('Backend URL:', backendUrl);

            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            console.log('Appointments response:', data);
            
            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log('Appointments set:', data.appointments);
            } else {
                console.log('API returned success: false', data.message);
                toast.error(data.message || 'Failed to fetch appointments');
            }

        } catch (error) {
            console.log('Error fetching appointments:', error)
            console.log('Error response:', error.response?.data);
            toast.error(error.response?.data?.message || error.message || 'Failed to fetch appointments')
        }
    }

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {

                console.log(response)

                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                window.location.replace(data.session_url)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        console.log('MyAppointments useEffect - token:', token ? 'Present' : 'Missing');
        if (token) {
            getUserAppointments()
        }
    }, [token])

    return (
        <div>
            <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>My appointments</p>
            
            {/* Debug Info */}
            <div className='bg-gray-100 p-4 my-4 rounded text-sm'>
                <p><strong>Debug Info:</strong></p>
                <p>Token: {token ? '✅ Present' : '❌ Missing'}</p>
                <p>Backend URL: {backendUrl}</p>
                <p>Appointments count: {appointments.length}</p>
            </div>
            
            <div className=''>
                {appointments.length > 0 ? appointments.map((item, index) => (
                    <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
                        <div>
                            <div className='w-36 h-24 bg-[#EAEFFF] rounded-lg flex items-center justify-center text-4xl'>
                                {item.serviceData?.icon || '🏛️'}
                            </div>
                        </div>
                        <div className='flex-1 text-sm text-[#5E5E5E]'>
                            <p className='text-[#262626] text-base font-semibold'>{item.serviceData?.name || item.docData?.name}</p>
                            <p>{item.serviceData?.department || item.docData?.speciality}</p>
                            <p className='text-[#464646] font-medium mt-1'>Location:</p>
                            <p className=''>Azrou Municipality Building</p>
                            <p className=''>Avenue Mohammed V, Azrou</p>
                            <p className=' mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} |  {item.slotTime}</p>
                            {item.serviceData?.fee && (
                                <p className='mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Fee:</span> {item.serviceData.fee}</p>
                            )}
                        </div>
                        <div></div>
                        <div className='flex flex-col gap-2 justify-end text-sm text-center'>
                            {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="" /></button>}
                            {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'><img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="" /></button>}
                            {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-[#696969]  bg-[#EAEFFF]'>Paid</button>}

                            {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}

                            {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>}
                            {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment cancelled</button>}
                        </div>
                    </div>
                )) : (
                    <div className='text-center py-12'>
                        <div className='text-6xl mb-4'>📅</div>
                        <p className='text-gray-500 mb-4'>No appointments found</p>
                        <p className='text-gray-400 text-sm mb-4'>
                            {!token ? 'Please log in to view your appointments' : 'You haven\'t booked any appointments yet'}
                        </p>
                        <button 
                            onClick={() => navigate('/services')} 
                            className='bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all'
                        >
                            Book an Appointment
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyAppointments
