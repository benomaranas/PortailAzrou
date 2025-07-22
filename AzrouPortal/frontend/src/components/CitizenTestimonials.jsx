import React from 'react'

const CitizenTestimonials = () => {
  const testimonials = [
    {
      name: 'Fatima El Amrani',
      role: 'Local Business Owner',
      message: 'The new digital platform made getting my business license so much easier. Everything is transparent and efficient now.',
      rating: 5,
      avatar: 'https://picsum.photos/100/100?random=120'
    },
    {
      name: 'Ahmed Benali',
      role: 'Resident',
      message: 'I love how I can track my requests online and pay my bills from home. This is exactly what modern municipalities should offer.',
      rating: 5,
      avatar: 'https://picsum.photos/100/100?random=121'
    },
    {
      name: 'Khadija Alaoui',
      role: 'Teacher',
      message: 'Reporting neighborhood issues has never been this simple. The municipality responds quickly and keeps us updated.',
      rating: 5,
      avatar: 'https://picsum.photos/100/100?random=122'
    },
    {
      name: 'Youssef Kadiri',
      role: 'Student',
      message: 'As a student, I appreciate having access to all city information and services in one place. Very user-friendly!',
      rating: 5,
      avatar: 'https://picsum.photos/100/100?random=123'
    }
  ]

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <div className='py-16 bg-gradient-to-br from-blue-50 to-green-50'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>What Our Citizens Say</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Hear from our community members about their experience with Azrou Municipality's digital services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300'>
              {/* Stars */}
              <div className='flex mb-4'>
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Message */}
              <p className='text-gray-700 text-sm mb-4 italic'>
                "{testimonial.message}"
              </p>
              
              {/* User Info */}
              <div className='flex items-center gap-3'>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full object-cover'
                />
                <div>
                  <h4 className='font-semibold text-gray-800 text-sm'>{testimonial.name}</h4>
                  <p className='text-gray-500 text-xs'>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className='mt-12 text-center'>
          <div className='inline-flex items-center gap-8 bg-white rounded-lg px-8 py-4 shadow-md'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-green-600'>4.8/5</div>
              <div className='text-sm text-gray-600'>Average Rating</div>
            </div>
            <div className='w-px h-12 bg-gray-300'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-blue-600'>2,500+</div>
              <div className='text-sm text-gray-600'>Happy Citizens</div>
            </div>
            <div className='w-px h-12 bg-gray-300'></div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-purple-600'>99.2%</div>
              <div className='text-sm text-gray-600'>Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CitizenTestimonials
