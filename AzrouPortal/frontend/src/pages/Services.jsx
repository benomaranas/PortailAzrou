import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../context/ApiContext'
import { assets } from '../assets/assets'
import ServiceRating from '../components/ServiceRating'
import ServiceStatus from '../components/ServiceStatus'

const Services = () => {
  const navigate = useNavigate()
  const { departments, fetchDepartments, loading } = useApi()
  const [selectedCategory, setSelectedCategory] = useState('🌟 All')

  useEffect(() => {
    if (departments.length === 0) {
      fetchDepartments()
    }
  }, [])

  const defaultDepartments = [
    {
      _id: '1',
      name: '📋 Civil Registry',
      description: '👶 Birth certificates, 💒 marriage licenses, ⚰️ death certificates, and 🆔 identity documents.',
      services: ['📜 Birth Certificate', '💍 Marriage License', '🪦 Death Certificate', '🆔 ID Card Renewal', '📘 Passport Services'],
      icon: assets.CivilRegistry,
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
      name: '🏗️ Urban Planning',
      description: '🏠 Construction permits, 🗺️ zoning information, and 🌆 urban development services.',
      services: ['🏗️ Building Permits', '📍 Zoning Certificates', '🏘️ Land Use Planning', '🔍 Construction Inspections', '✅ Development Approvals'],
      icon: assets.UrbanPlanning,
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
      name: '💰 Finance Department',
      description: '💸 Tax services, 💳 fee payments, and 🤝 financial assistance programs.',
      services: ['🏠 Property Tax', '📄 Business License', '💳 Fee Payment', '🆘 Financial Aid', '📊 Budget Information'],
      icon: assets.Finance,
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
      name: '🛣️ Public Works',
      description: '🚧 Road maintenance, 🏗️ infrastructure projects, and 🔧 public utilities.',
      services: ['🔨 Road Repairs', '💡 Street Lighting', '💧 Water Services', '🗑️ Waste Management', '⚙️ Infrastructure Maintenance'],
      icon: assets.PublicWorks,
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
      name: '🤝 Social Services',
      description: '👥 Community support, 👴 elderly care, and 🆘 social assistance programs.',
      services: ['🤲 Social Assistance', '👵 Elderly Support', '🧒 Youth Programs', '🎉 Community Events', '🆘 Emergency Aid'],
      icon: assets.SocialServices,
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
      name: '🌱 Environmental Services',
      description: '🌍 Environmental protection, ♻️ waste management, and 🌿 green initiatives.',
      services: ['🗑️ Waste Collection', '♻️ Recycling Programs', '📜 Environmental Permits', '🌱 Green Initiatives', '🏭 Pollution Control'],
      icon: assets.Environmental,
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
  const categories = ['🌟 All', '📋 Administrative', '🏗️ Development', '💰 Financial', '🏗️ Infrastructure', '🤝 Social', '🌱 Environmental']

  const filteredDepartments = selectedCategory === '🌟 All' 
    ? departmentsToShow 
    : departmentsToShow.filter(dept => {
        const categoryMap = {
          '📋 Administrative': 'Administrative',
          '🏗️ Development': 'Development', 
          '💰 Financial': 'Financial',
          '🏗️ Infrastructure': 'Infrastructure',
          '🤝 Social': 'Social',
          '🌱 Environmental': 'Environmental'
        }
        return dept.category === categoryMap[selectedCategory]
      })

  const handleBookAppointment = (departmentId, departmentName) => {
    navigate(`/appointment/service/${departmentId}`, { state: { departmentName } })
  }

  if (loading) {
    return (
      <div className='py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold text-gradient-rainbow mb-6 animate-pulse-slow'>🏛️ Municipal Services</h1>
            <div className='flex justify-center items-center'>
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600 mr-4"></div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce stagger-1"></div>
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce stagger-2"></div>
              </div>
            </div>
            <p className='text-lg text-gray-600 mt-4 animate-pulse loading-dots'>⏳ Loading amazing services</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12 animate-fadeInUp'>
          <h1 className='text-5xl font-bold text-gradient-rainbow mb-4 animate-pulse-slow'>🏛️ Municipal Services</h1>
          <p className='text-gray-700 max-w-3xl mx-auto text-lg animate-fadeInUp stagger-1'>
            🏢 Access all municipal services and departments in one place. From civil registry to urban planning, 
            we're here to serve the citizens of Azrou with efficiency and transparency. ✨
          </p>
        </div>

        {/* Category Filter */}
        <div className='mb-12 animate-fadeInUp stagger-2'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover-scale animate-bounceIn stagger-${index + 1} ${
                  selectedCategory === category
                    ? 'bg-gradient-primary text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gradient-info hover:text-white shadow-lg hover-glow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {filteredDepartments.map((department, index) => (
            <div key={department._id} className={`bg-white rounded-2xl shadow-lg card-hover overflow-hidden animate-fadeInUp stagger-${(index % 6) + 1} relative`}>
              {/* Popular Badge */}
              {index < 2 && (
                <div className="popular-badge">
                  🔥 Popular
                </div>
              )}
              
              {/* Department Header */}
              <div className={`p-6 text-white relative overflow-hidden ${
                index % 6 === 0 ? 'bg-gradient-primary' :
                index % 6 === 1 ? 'bg-gradient-secondary' :
                index % 6 === 2 ? 'bg-gradient-success' :
                index % 6 === 3 ? 'bg-gradient-warning' :
                index % 6 === 4 ? 'bg-gradient-danger' : 'bg-gradient-info'
              }`}>
                <div className='absolute top-0 right-0 w-32 h-32 rounded-full bg-white opacity-10 transform translate-x-16 -translate-y-16'></div>
                <div className='relative z-10'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className='animate-float'>
                      <img 
                        className='w-14 h-14 hover-rotate transition-transform duration-300' 
                        src={department.icon} 
                        alt={department.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon div */}
                      <div className='w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse-slow' style={{display: 'none'}}>
                        {department.name.charAt(0)}
                      </div>
                    </div>
                    <span className='bg-white/20 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm animate-shimmer'>
                      {department.category}
                    </span>
                  </div>
                  <h3 className='text-2xl font-bold mb-3'>{department.name}</h3>
                  <p className='text-white/90 text-sm leading-relaxed'>{department.description}</p>
                </div>
              </div>

              {/* Service Status */}
              <div className='p-6 pb-4'>
                <ServiceStatus 
                  departmentId={department._id} 
                  departmentName={department.name} 
                />
              </div>

              {/* Services List */}
              <div className='px-8 pb-4'>
                <h4 className='font-bold text-gray-800 mb-4 text-lg'>📋 Available Services:</h4>
                <ul className='space-y-3 mb-6'>
                  {department.services && Array.isArray(department.services) && department.services.slice(0, 3).map((service, serviceIndex) => (
                    <li key={serviceIndex} className={`flex items-center text-sm text-gray-700 animate-fadeInLeft stagger-${serviceIndex + 1}`}>
                      <div className={`w-3 h-3 rounded-full mr-3 animate-pulse-slow ${
                        serviceIndex % 3 === 0 ? 'bg-blue-500' :
                        serviceIndex % 3 === 1 ? 'bg-purple-500' : 'bg-pink-500'
                      }`}></div>
                      <span className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                        {typeof service === 'string' ? service : service.name || 'Service'}
                      </span>
                    </li>
                  ))}
                  {department.services && department.services.length > 3 && (
                    <li className='text-sm text-blue-600 font-medium animate-bounceIn'>
                      ➕ {department.services.length - 3} more services
                    </li>
                  )}
                </ul>
              </div>

              {/* Contact Info */}
              <div className='px-8 pb-4'>
                <div className='border-t border-gray-100 pt-6 mb-8'>
                  <div className='text-sm text-gray-600 space-y-3'>
                    <div className='flex items-center hover:text-blue-600 transition-colors duration-300 cursor-pointer'>
                      <span className='text-xl mr-3 animate-float'>📞</span>
                      <span className="font-medium">{department.contactInfo.phone}</span>
                    </div>
                    <div className='flex items-center hover:text-purple-600 transition-colors duration-300 cursor-pointer'>
                      <span className='text-xl mr-3 animate-float'>📧</span>
                      <span className="font-medium">{department.contactInfo.email}</span>
                    </div>
                    <div className='flex items-center hover:text-green-600 transition-colors duration-300'>
                      <span className='text-xl mr-3 animate-float'>📍</span>
                      <span className="font-medium">{department.contactInfo.address || department.contactInfo.office}</span>
                    </div>
                    <div className='flex items-center hover:text-orange-600 transition-colors duration-300'>
                      <span className='text-xl mr-3 animate-float'>🕒</span>
                      <span className="font-medium">{department.availability?.hours || department.contactInfo.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='px-8 pb-8'>
                <div className='flex gap-4 mb-6'>
                  <button
                    onClick={() => handleBookAppointment(department._id, department.name)}
                    className='flex-1 bg-gradient-primary text-white py-3 px-6 rounded-xl hover-scale transition-all duration-300 text-sm font-semibold shadow-lg hover-glow btn-pulse'
                  >
                    📅 Book Appointment
                  </button>
                  <button className='px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 text-sm font-semibold hover-scale'>
                    ℹ️ More Info
                  </button>
                </div>

                {/* Service Rating */}
                <ServiceRating 
                  departmentId={department._id} 
                  departmentName={department.name}
                  showReviews={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className='bg-gradient-danger rounded-2xl p-8 text-center shadow-xl animate-fadeInUp hover-scale'>
          <div className='animate-pulse-slow'>
            <h3 className='text-2xl font-bold text-white mb-3'>🚨 Emergency Services</h3>
            <p className='text-white/90 mb-6 text-lg'>⚡ For urgent matters requiring immediate attention</p>
          </div>
          <div className='flex justify-center gap-8'>
            <div className='text-center animate-bounceIn stagger-1'>
              <div className='text-4xl font-bold text-white mb-2 hover-scale cursor-pointer'>👮‍♂️ 15</div>
              <div className='text-sm text-white/80 font-semibold'>Police</div>
            </div>
            <div className='text-center animate-bounceIn stagger-2'>
              <div className='text-4xl font-bold text-white mb-2 hover-scale cursor-pointer'>🚒 177</div>
              <div className='text-sm text-white/80 font-semibold'>Civil Protection</div>
            </div>
            <div className='text-center animate-bounceIn stagger-3'>
              <div className='text-4xl font-bold text-white mb-2 hover-scale cursor-pointer'>🚑 141</div>
              <div className='text-sm text-white/80 font-semibold'>Emergency Medical</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
