import React from 'react'
import { useApi } from '../context/ApiContext'

const CityStats = () => {
  const { cityStats, loading } = useApi()

  const defaultStats = [
    {
      icon: '👥',
      value: '45,230',
      label: 'Citizens',
      color: 'text-blue-600'
    },
    {
      icon: '🏢',
      value: '127',
      label: 'Municipal Services',
      color: 'text-green-600'
    },
    {
      icon: '🚧',
      value: '23',
      label: 'Active Projects',
      color: 'text-orange-600'
    },
    {
      icon: '📊',
      value: '98.5%',
      label: 'Satisfaction Rate',
      color: 'text-purple-600'
    }
  ]

  const statsToShow = cityStats && cityStats.length > 0 ? cityStats : defaultStats

  if (loading) {
    return (
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Azrou by Numbers</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className='text-center animate-pulse'>
                <div className='bg-gray-200 h-12 w-12 rounded-full mx-auto mb-4'></div>
                <div className='bg-gray-200 h-8 w-20 mx-auto mb-2 rounded'></div>
                <div className='bg-gray-200 h-4 w-24 mx-auto rounded'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Azrou by Numbers</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Key statistics about our municipality and the services we provide to our citizens.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {statsToShow.map((stat, index) => (
            <div key={index} className='text-center group hover:transform hover:scale-105 transition-all duration-300'>
              <div className={`text-4xl mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className='text-gray-600 font-medium'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Growing Together</h3>
            <p className='text-gray-600 max-w-3xl mx-auto'>
              Azrou Municipality is committed to transparency and continuous improvement. 
              These statistics reflect our ongoing efforts to serve our community better every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityStats
