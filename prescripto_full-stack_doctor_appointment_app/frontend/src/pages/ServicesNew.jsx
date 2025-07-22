import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../context/ApiContext'

const Services = () => {
  const navigate = useNavigate()
  const { departments, fetchDepartments, loading } = useApi()
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    if (departments.length === 0) {
      fetchDepartments()
    }
  }, [])

  const defaultDepartments = [
    {
      _id: '1',
      name: 'Civil Registry',
      description: 'Birth certificates, marriage licenses, death certificates, and identity documents.',
      services: ['Birth Certificate', 'Marriage License', 'Death Certificate', 'ID Card Renewal', 'Passport Services'],
      icon: '📋',
      contactInfo: {
        phone: '+212 535-123-001',
        email: 'civil.registry@azrou.ma',
        address: 'Building A, Ground Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '8:00 AM - 4:00 PM'
      },
      category: 'Administrative'
    },
    {
      _id: '2',
      name: 'Urban Planning',
      description: 'Construction permits, zoning information, and urban development services.',
      services: ['Building Permits', 'Zoning Certificates', 'Land Use Planning', 'Construction Inspections', 'Development Approvals'],
      icon: '🏗️',
      contactInfo: {
        phone: '+212 535-123-002',
        email: 'urban.planning@azrou.ma',
        address: 'Building B, Second Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '8:30 AM - 4:30 PM'
      },
      category: 'Development'
    },
    {
      _id: '3',
      name: 'Finance Department',
      description: 'Tax services, fee payments, and financial assistance programs.',
      services: ['Property Tax', 'Business License', 'Fee Payment', 'Financial Aid', 'Budget Information'],
      icon: '💰',
      contactInfo: {
        phone: '+212 535-123-003',
        email: 'finance@azrou.ma',
        address: 'Building A, First Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '8:00 AM - 3:30 PM'
      },
      category: 'Financial'
    },
    {
      _id: '4',
      name: 'Public Works',
      description: 'Road maintenance, infrastructure projects, and public utilities.',
      services: ['Road Repairs', 'Street Lighting', 'Water Services', 'Waste Management', 'Infrastructure Maintenance'],
      icon: '🚧',
      contactInfo: {
        phone: '+212 535-123-004',
        email: 'public.works@azrou.ma',
        address: 'Building C, Ground Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        hours: '7:00 AM - 5:00 PM'
      },
      category: 'Infrastructure'
    },
    {
      _id: '5',
      name: 'Social Services',
      description: 'Community support, elderly care, and social assistance programs.',
      services: ['Social Assistance', 'Elderly Support', 'Youth Programs', 'Community Events', 'Emergency Aid'],
      icon: '🤝',
      contactInfo: {
        phone: '+212 535-123-005',
        email: 'social.services@azrou.ma',
        address: 'Building D, First Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '8:00 AM - 4:00 PM'
      },
      category: 'Social'
    },
    {
      _id: '6',
      name: 'Environmental Services',
      description: 'Environmental protection, waste management, and green initiatives.',
      services: ['Waste Collection', 'Recycling Programs', 'Environmental Permits', 'Green Initiatives', 'Pollution Control'],
      icon: '🌱',
      contactInfo: {
        phone: '+212 535-123-006',
        email: 'environment@azrou.ma',
        address: 'Building E, Ground Floor'
      },
      availability: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        hours: '8:00 AM - 4:00 PM'
      },
      category: 'Environmental'
    }
  ]

  const departmentsToShow = departments && departments.length > 0 ? departments : defaultDepartments
  const categories = ['All', 'Administrative', 'Development', 'Financial', 'Infrastructure', 'Social', 'Environmental']

  const filteredDepartments = selectedCategory === 'All' 
    ? departmentsToShow 
    : departmentsToShow.filter(dept => dept.category === selectedCategory)

  const handleBookAppointment = (departmentId, departmentName) => {
    navigate(`/appointment/service/${departmentId}`, { state: { departmentName } })
  }

  if (loading) {
    return (
      <div className='py-16 bg-gray-50 min-h-screen'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>Municipal Services</h1>
          </div>
          <div className='flex justify-center'>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='py-16 bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Municipal Services</h1>
          <p className='text-gray-600 max-w-3xl mx-auto text-lg'>
            Access all municipal services and departments in one place. From civil registry to urban planning, 
            we're here to serve the citizens of Azrou with efficiency and transparency.
          </p>
        </div>

        {/* Category Filter */}
        <div className='mb-12'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {filteredDepartments.map((department) => (
            <div key={department._id} className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden'>
              {/* Department Header */}
              <div className='bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-4xl'>{department.icon}</span>
                  <span className='bg-white/20 px-3 py-1 rounded-full text-sm'>
                    {department.category}
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>{department.name}</h3>
                <p className='text-blue-100 text-sm'>{department.description}</p>
              </div>

              {/* Services List */}
              <div className='p-6'>
                <h4 className='font-semibold text-gray-800 mb-3'>Available Services:</h4>
                <ul className='space-y-2 mb-6'>
                  {department.services.slice(0, 3).map((service, index) => (
                    <li key={index} className='flex items-center text-sm text-gray-600'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full mr-2'></div>
                      {service}
                    </li>
                  ))}
                  {department.services.length > 3 && (
                    <li className='text-sm text-blue-600 font-medium'>
                      +{department.services.length - 3} more services
                    </li>
                  )}
                </ul>

                {/* Contact Info */}
                <div className='border-t pt-4 mb-6'>
                  <div className='text-sm text-gray-600 space-y-1'>
                    <div className='flex items-center'>
                      <span className='font-medium mr-2'>📞</span>
                      {department.contactInfo.phone}
                    </div>
                    <div className='flex items-center'>
                      <span className='font-medium mr-2'>📧</span>
                      {department.contactInfo.email}
                    </div>
                    <div className='flex items-center'>
                      <span className='font-medium mr-2'>📍</span>
                      {department.contactInfo.address || department.contactInfo.office}
                    </div>
                    <div className='flex items-center'>
                      <span className='font-medium mr-2'>🕒</span>
                      {department.availability?.hours || department.contactInfo.hours}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3'>
                  <button
                    onClick={() => handleBookAppointment(department._id, department.name)}
                    className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium'
                  >
                    Book Appointment
                  </button>
                  <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium'>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className='bg-red-50 border border-red-200 rounded-lg p-6 text-center'>
          <h3 className='text-lg font-bold text-red-800 mb-2'>Emergency Services</h3>
          <p className='text-red-700 mb-3'>For urgent matters requiring immediate attention</p>
          <div className='flex justify-center gap-6'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-red-600'>15</div>
              <div className='text-sm text-red-700'>Police</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-red-600'>177</div>
              <div className='text-sm text-red-700'>Civil Protection</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-red-600'>141</div>
              <div className='text-sm text-red-700'>Emergency Medical</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
