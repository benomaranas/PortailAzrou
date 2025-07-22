import React from 'react'
import { useNavigate } from 'react-router-dom'

const TourismHighlights = () => {
  const navigate = useNavigate()

  const attractions = [
    {
      name: 'Cedar Forest of Azrou',
      description: 'Ancient cedar forests home to Barbary macaques and diverse wildlife',
      image: 'https://picsum.photos/400/250?random=130',
      category: 'Nature',
      distance: '5 km from center'
    },
    {
      name: 'Azrou Souk (Traditional Market)',
      description: 'Authentic Berber market with handicrafts, carpets, and local products',
      image: 'https://picsum.photos/400/250?random=131',
      category: 'Culture',
      distance: 'City Center'
    },
    {
      name: 'Lake Dayet Aoua',
      description: 'Beautiful natural lake perfect for picnics and bird watching',
      image: 'https://picsum.photos/400/250?random=132',
      category: 'Nature',
      distance: '15 km from center'
    },
    {
      name: 'Rock of Azrou',
      description: 'Historic volcanic rock formation with panoramic views',
      image: 'https://picsum.photos/400/250?random=133',
      category: 'Landmark',
      distance: '2 km from center'
    }
  ]

  const events = [
    {
      name: 'Cherry Festival',
      date: 'June 2025',
      description: 'Annual celebration of cherry harvest season',
      icon: '🍒'
    },
    {
      name: 'Amazigh Culture Week',
      date: 'April 2025',
      description: 'Traditional Berber culture and arts festival',
      icon: '🎭'
    },
    {
      name: 'Moussem of Sidi Ali',
      date: 'August 2025',
      description: 'Traditional religious and cultural celebration',
      icon: '🕌'
    }
  ]

  return (
    <div className='py-16 bg-green-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>🌲 Discover Azrou</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Explore the natural beauty, rich culture, and historic landmarks that make Azrou a unique destination in the Middle Atlas.
          </p>
        </div>

        {/* Attractions */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-center mb-8 text-green-700'>Top Attractions</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {attractions.map((attraction, index) => (
              <div key={index} className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className='w-full h-48 object-cover'
                />
                <div className='p-4'>
                  <div className='flex justify-between items-start mb-2'>
                    <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium'>
                      {attraction.category}
                    </span>
                    <span className='text-xs text-gray-500'>{attraction.distance}</span>
                  </div>
                  <h4 className='font-bold text-gray-800 mb-2'>{attraction.name}</h4>
                  <p className='text-sm text-gray-600 mb-3'>{attraction.description}</p>
                  <button className='text-primary text-sm font-medium hover:underline'>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-center mb-8 text-blue-700'>Upcoming Events</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {events.map((event, index) => (
              <div key={index} className='bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-md'>
                <div className='flex items-center gap-3 mb-3'>
                  <span className='text-3xl'>{event.icon}</span>
                  <div>
                    <h4 className='font-bold text-gray-800'>{event.name}</h4>
                    <p className='text-blue-600 font-medium text-sm'>{event.date}</p>
                  </div>
                </div>
                <p className='text-gray-600 text-sm'>{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tourism Services */}
        <div className='bg-white rounded-lg p-8 shadow-lg'>
          <h3 className='text-2xl font-bold text-center mb-8 text-gray-800'>🗺️ Tourism Services</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='text-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-all'>
              <div className='text-4xl mb-3'>📍</div>
              <h4 className='font-semibold text-gray-800 mb-2'>Tourist Information</h4>
              <p className='text-sm text-gray-600 mb-3'>Maps, guides, and local recommendations</p>
              <button className='text-primary font-medium text-sm hover:underline'>Get Info</button>
            </div>
            <div className='text-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-all'>
              <div className='text-4xl mb-3'>🏨</div>
              <h4 className='font-semibold text-gray-800 mb-2'>Accommodation</h4>
              <p className='text-sm text-gray-600 mb-3'>Hotels, guesthouses, and camping sites</p>
              <button className='text-primary font-medium text-sm hover:underline'>Find Hotels</button>
            </div>
            <div className='text-center p-4 border border-gray-200 rounded-lg hover:border-primary transition-all'>
              <div className='text-4xl mb-3'>🍽️</div>
              <h4 className='font-semibold text-gray-800 mb-2'>Local Cuisine</h4>
              <p className='text-sm text-gray-600 mb-3'>Traditional restaurants and local specialties</p>
              <button className='text-primary font-medium text-sm hover:underline'>Explore Food</button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-12 text-center'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Plan Your Visit to Azrou</h3>
          <p className='text-gray-600 mb-6'>Contact our tourism office for personalized recommendations and assistance.</p>
          <div className='flex justify-center gap-4'>
            <button 
              onClick={() => navigate('/contact')}
              className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all'
            >
              Contact Tourism Office
            </button>
            <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all'>
              Download City Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourismHighlights
