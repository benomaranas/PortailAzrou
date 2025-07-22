import React, { useState } from 'react'

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const newsCategories = ['All', 'Announcements', 'Events', 'Public Works', 'Health', 'Development']

  const newsItems = [
    {
      id: 1,
      title: "New Digital Services Platform Launched",
      category: "Announcements",
      date: "January 15, 2025",
      summary: "Azrou Municipality launches a comprehensive digital platform for easier access to municipal services.",
      content: "Citizens can now access most municipal services online, reducing wait times and improving efficiency.",
      image: "🖥️",
      priority: "high"
    },
    {
      id: 2,
      title: "Annual Cedar Festival 2025",
      category: "Events",
      date: "February 10, 2025",
      summary: "Join us for the annual celebration of Azrou's famous cedar forests.",
      content: "The festival will feature cultural performances, local crafts, and environmental education.",
      image: "🌲",
      priority: "medium"
    },
    {
      id: 3,
      title: "Road Maintenance on Avenue Mohammed V",
      category: "Public Works",
      date: "January 20, 2025",
      summary: "Scheduled road improvements will affect traffic flow for two weeks.",
      content: "Alternative routes will be provided. Work hours: 8 AM - 6 PM daily.",
      image: "🚧",
      priority: "high"
    },
    {
      id: 4,
      title: "Free Health Screening Campaign",
      category: "Health",
      date: "January 25, 2025",
      summary: "Municipal health department offers free health screenings for residents.",
      content: "Available at the municipal health center. Bring valid ID.",
      image: "🏥",
      priority: "medium"
    },
    {
      id: 5,
      title: "New Business District Development",
      category: "Development",
      date: "February 1, 2025",
      summary: "Plans unveiled for new commercial district to boost local economy.",
      content: "Project expected to create 500 new jobs and attract investment to Azrou.",
      image: "🏗️",
      priority: "low"
    }
  ]

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'border-l-red-500 bg-red-50'
      case 'medium': return 'border-l-yellow-500 bg-yellow-50'
      case 'low': return 'border-l-green-500 bg-green-50'
      default: return 'border-l-gray-500 bg-gray-50'
    }
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Azrou News & Announcements</h1>
        <p className='text-gray-600'>Stay updated with the latest news and events from Azrou Municipality</p>
      </div>

      {/* Category Filter */}
      <div className='flex flex-wrap gap-2 mb-8 justify-center'>
        {newsCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredNews.map((item) => (
          <div 
            key={item.id} 
            className={`border-l-4 ${getPriorityColor(item.priority)} p-6 rounded-lg shadow-sm hover:shadow-md transition-all`}
          >
            <div className='flex items-start gap-4'>
              <div className='text-3xl'>{item.image}</div>
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.category === 'Announcements' ? 'bg-blue-100 text-blue-600' :
                    item.category === 'Events' ? 'bg-purple-100 text-purple-600' :
                    item.category === 'Public Works' ? 'bg-orange-100 text-orange-600' :
                    item.category === 'Health' ? 'bg-green-100 text-green-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {item.category}
                  </span>
                  <span className='text-xs text-gray-500'>{item.date}</span>
                </div>
                <h3 className='font-semibold text-gray-800 mb-2'>{item.title}</h3>
                <p className='text-sm text-gray-600 mb-3'>{item.summary}</p>
                <p className='text-xs text-gray-500'>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500'>No news items found for the selected category.</p>
        </div>
      )}

      {/* Emergency Notice */}
      <div className='mt-12 bg-red-50 border border-red-200 rounded-lg p-6'>
        <div className='flex items-start gap-3'>
          <div className='text-2xl'>🚨</div>
          <div>
            <h3 className='font-semibold text-red-800 mb-2'>Emergency Information</h3>
            <p className='text-red-700 text-sm'>
              For urgent municipal emergencies outside office hours, call our emergency hotline: <strong>190</strong>
            </p>
            <p className='text-red-600 text-xs mt-1'>
              This includes water main breaks, road hazards, power outages, and other immediate safety concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
