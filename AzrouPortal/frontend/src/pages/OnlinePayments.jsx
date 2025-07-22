import React, { useState } from 'react'
import { toast } from 'react-toastify'

const OnlinePayments = () => {
  const [selectedService, setSelectedService] = useState('')
  const [paymentData, setPaymentData] = useState({
    serviceType: '',
    referenceNumber: '',
    amount: '',
    payerName: '',
    payerEmail: '',
    payerPhone: '',
    notes: ''
  })

  const paymentServices = [
    {
      id: 'property-tax',
      name: 'Property Tax',
      description: 'Annual property tax payments',
      baseAmount: 500,
      icon: '🏠'
    },
    {
      id: 'water-bills',
      name: 'Water & Utilities',
      description: 'Monthly water and utility bills',
      baseAmount: 150,
      icon: '💧'
    },
    {
      id: 'business-license',
      name: 'Business License Fee',
      description: 'Annual business license renewal',
      baseAmount: 300,
      icon: '🏪'
    },
    {
      id: 'building-permit',
      name: 'Building Permit Fee',
      description: 'Construction and renovation permits',
      baseAmount: 200,
      icon: '🏗️'
    },
    {
      id: 'parking-fines',
      name: 'Parking Fines',
      description: 'Municipal parking violation fines',
      baseAmount: 100,
      icon: '🚗'
    },
    {
      id: 'waste-management',
      name: 'Waste Management Fee',
      description: 'Annual waste collection service',
      baseAmount: 120,
      icon: '🗑️'
    }
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setPaymentData(prev => ({
      ...prev,
      serviceType: service.name,
      amount: service.baseAmount.toString()
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePayment = (e) => {
    e.preventDefault()
    
    if (!selectedService || !paymentData.payerName || !paymentData.payerEmail) {
      toast.error('Please fill in all required fields')
      return
    }

    // Simulate payment processing
    toast.success('Payment processed successfully! You will receive a confirmation email.')
    
    // Reset form
    setSelectedService('')
    setPaymentData({
      serviceType: '',
      referenceNumber: '',
      amount: '',
      payerName: '',
      payerEmail: '',
      payerPhone: '',
      notes: ''
    })
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Online Payments</h1>
        <p className='text-gray-600'>Pay your municipal fees and taxes securely online</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Service Selection */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Select Service</h2>
          <div className='space-y-3'>
            {paymentServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedService?.id === service.id ? 'border-primary bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className='flex items-center gap-3'>
                  <div className='text-2xl'>{service.icon}</div>
                  <div className='flex-1'>
                    <h3 className='font-medium'>{service.name}</h3>
                    <p className='text-sm text-gray-600'>{service.description}</p>
                  </div>
                  <div className='text-right'>
                    <div className='font-semibold text-primary'>{service.baseAmount} MAD</div>
                    <div className='text-xs text-gray-500'>Base fee</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className='mt-8 p-4 bg-gray-50 rounded-lg'>
            <h3 className='font-semibold mb-3'>Accepted Payment Methods</h3>
            <div className='flex items-center gap-4 text-sm'>
              <div className='flex items-center gap-2'>
                <span>💳</span>
                <span>Credit/Debit Cards</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>🏦</span>
                <span>Bank Transfer</span>
              </div>
              <div className='flex items-center gap-2'>
                <span>📱</span>
                <span>Mobile Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Payment Details</h2>
          <form onSubmit={handlePayment} className='space-y-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Service Type</label>
              <input
                type='text'
                value={paymentData.serviceType}
                readOnly
                className='w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50'
                placeholder='Select a service first'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Reference Number (Optional)</label>
              <input
                type='text'
                name='referenceNumber'
                value={paymentData.referenceNumber}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Invoice or reference number'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Amount (MAD) *</label>
              <input
                type='number'
                name='amount'
                value={paymentData.amount}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='0.00'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
              <input
                type='text'
                name='payerName'
                value={paymentData.payerName}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
              <input
                type='email'
                name='payerEmail'
                value={paymentData.payerEmail}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
              <input
                type='tel'
                name='payerPhone'
                value={paymentData.payerPhone}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Additional Notes</label>
              <textarea
                name='notes'
                value={paymentData.notes}
                onChange={handleInputChange}
                rows='3'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                placeholder='Any additional information...'
              />
            </div>

            <button
              type='submit'
              disabled={!selectedService}
              className='w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-all duration-300 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed'
            >
              Proceed to Payment
            </button>
          </form>

          <div className='mt-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
            <div className='flex items-start gap-2'>
              <span className='text-green-600'>🔒</span>
              <div className='text-sm'>
                <h4 className='font-semibold text-green-800'>Secure Payment</h4>
                <p className='text-green-700'>All payments are processed securely. Your personal and financial information is protected.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlinePayments
