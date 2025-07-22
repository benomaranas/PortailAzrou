import React from 'react'

const EmergencyServices = () => {
  const emergencyContacts = [
    {
      service: 'Police Emergency',
      number: '19',
      icon: '🚔',
      color: 'bg-red-500',
      description: '24/7 Emergency Police Response'
    },
    {
      service: 'Fire Department',
      number: '15',
      icon: '🚒',
      color: 'bg-orange-500',
      description: 'Fire Emergency & Rescue Services'
    },
    {
      service: 'Medical Emergency',
      number: '141',
      icon: '🚑',
      color: 'bg-blue-500',
      description: 'Emergency Medical Services'
    },
    {
      service: 'Municipality Emergency',
      number: '0535-123-456',
      icon: '🏛️',
      color: 'bg-green-500',
      description: 'Municipal Emergency Hotline'
    }
  ]

  const importantNumbers = [
    {
      service: 'Water Emergency',
      number: '0535-111-222',
      icon: '💧'
    },
    {
      service: 'Electricity Outage',
      number: '0535-333-444',
      icon: '⚡'
    },
    {
      service: 'Road Maintenance',
      number: '0535-555-666',
      icon: '🛣️'
    },
    {
      service: 'Waste Management',
      number: '0535-777-888',
      icon: '🗑️'
    }
  ]

  return (
    <div className='py-16 bg-red-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>🚨 Emergency Services & Important Numbers</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Quick access to emergency services and important municipal contact numbers. Keep these handy for urgent situations.
          </p>
        </div>

        {/* Emergency Numbers */}
        <div className='mb-12'>
          <h3 className='text-xl font-bold text-center mb-8 text-red-600'>Emergency Numbers</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {emergencyContacts.map((contact, index) => (
              <div key={index} className='bg-white rounded-lg p-6 border-l-4 border-red-500 shadow-md hover:shadow-lg transition-all'>
                <div className='text-center'>
                  <div className={`w-16 h-16 ${contact.color} rounded-full flex items-center justify-center text-2xl text-white mx-auto mb-4`}>
                    {contact.icon}
                  </div>
                  <h4 className='font-bold text-gray-800 mb-2'>{contact.service}</h4>
                  <div className='text-3xl font-bold text-red-600 mb-2'>{contact.number}</div>
                  <p className='text-sm text-gray-600'>{contact.description}</p>
                  <button className='mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition-all'>
                    📞 Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Municipal Numbers */}
        <div>
          <h3 className='text-xl font-bold text-center mb-8 text-blue-600'>Municipal Services</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {importantNumbers.map((service, index) => (
              <div key={index} className='bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-all'>
                <div className='flex items-center gap-3'>
                  <div className='text-2xl'>{service.icon}</div>
                  <div>
                    <h5 className='font-semibold text-gray-800 text-sm'>{service.service}</h5>
                    <p className='text-blue-600 font-bold'>{service.number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className='mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6'>
          <h3 className='text-lg font-bold text-yellow-800 mb-4'>⚠️ Emergency Safety Tips</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700'>
            <div>
              <ul className='space-y-2'>
                <li>• Always call emergency numbers for immediate threats</li>
                <li>• Provide clear location information when calling</li>
                <li>• Keep emergency numbers saved in your phone</li>
              </ul>
            </div>
            <div>
              <ul className='space-y-2'>
                <li>• For non-emergencies, use municipal hotlines</li>
                <li>• Report issues through our digital platform</li>
                <li>• Stay calm and speak clearly to operators</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Download Emergency App Prompt */}
        <div className='mt-8 text-center bg-white rounded-lg p-6 shadow-md'>
          <h3 className='text-lg font-bold text-gray-800 mb-3'>📱 Download Emergency App</h3>
          <p className='text-gray-600 mb-4'>Get instant access to emergency services with one tap</p>
          <div className='flex justify-center gap-4'>
            <button className='bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-all'>
              📱 Download for iOS
            </button>
            <button className='bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-all'>
              🤖 Download for Android
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyServices
