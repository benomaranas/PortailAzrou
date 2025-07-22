import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const CivilRegistryService = () => {
  const navigate = useNavigate()

  const services = [
    {
      name: 'Birth Certificate',
      description: 'Official birth registration and certificate issuance',
      fee: '50 MAD',
      processingTime: '2-3 business days',
      documents: ['Hospital birth certificate', 'Parents\' ID cards', 'Marriage certificate']
    },
    {
      name: 'Marriage Certificate',
      description: 'Marriage registration and certificate issuance',
      fee: '100 MAD',
      processingTime: '1-2 business days',
      documents: ['Birth certificates of both parties', 'ID cards', 'Witnesses\' signatures']
    },
    {
      name: 'Death Certificate',
      description: 'Death registration and certificate issuance',
      fee: '50 MAD',
      processingTime: '1 business day',
      documents: ['Medical death certificate', 'Deceased\'s ID card', 'Family member ID']
    },
    {
      name: 'Identity Card Renewal',
      description: 'National identity card renewal service',
      fee: '75 MAD',
      processingTime: '5-7 business days',
      documents: ['Current ID card', 'Recent photo', 'Proof of residence']
    }
  ]

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='text-center mb-8'>
        <img src={assets.CivilRegistry} alt="Civil Registry" className='w-24 h-24 mx-auto mb-4' />
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Civil Registry Services</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Official documentation services for birth, marriage, death certificates and identity documents.
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
        {services.map((service, index) => (
          <div key={index} className='border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>{service.name}</h3>
            <p className='text-gray-600 mb-4'>{service.description}</p>
            
            <div className='space-y-2 mb-4'>
              <div className='flex justify-between'>
                <span className='font-medium'>Fee:</span>
                <span className='text-primary font-semibold'>{service.fee}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium'>Processing Time:</span>
                <span>{service.processingTime}</span>
              </div>
            </div>

            <div className='mb-4'>
              <h4 className='font-medium mb-2'>Required Documents:</h4>
              <ul className='text-sm text-gray-600 space-y-1'>
                {service.documents.map((doc, docIndex) => (
                  <li key={docIndex}>• {doc}</li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => navigate('/book-appointment')}
              className='w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-all'
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {/* Contact Information */}
      <div className='bg-gray-50 rounded-lg p-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Department Contact Information</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='font-medium mb-2'>Office Hours</h3>
            <p className='text-gray-600'>Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className='text-gray-600'>Saturday: 9:00 AM - 12:00 PM</p>
            <p className='text-gray-600'>Sunday: Closed</p>
          </div>
          <div>
            <h3 className='font-medium mb-2'>Contact Details</h3>
            <p className='text-gray-600'>Phone: +212 535-123-456</p>
            <p className='text-gray-600'>Email: civilregistry@azrou.ma</p>
            <p className='text-gray-600'>Office: Ground Floor, Municipality Building</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivilRegistryService
