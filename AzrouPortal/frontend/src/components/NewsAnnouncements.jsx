import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../context/ApiContext'

const NewsAnnouncements = () => {
  const navigate = useNavigate()
  const { news, fetchNews, loading } = useApi()

  useEffect(() => {
    if (news.length === 0) {
      fetchNews(4)
    }
  }, [])

  // Enhanced default news with emoji fallbacks
  const defaultNews = [
    {
      _id: '1',
      title: 'New Digital Services Platform Launched',
      content: 'Citizens can now access all municipal services online through our new digital platform.',
      category: 'Technology',
      image: 'https://picsum.photos/400/250?random=110',
      emoji: '💻',
      gradient: 'from-blue-500 to-purple-600',
      publishedAt: new Date('2024-12-15'),
      views: 1250
    },
    {
      _id: '2',
      title: 'Road Infrastructure Project Update',
      content: 'Phase 1 of the city-wide road improvement project has been completed ahead of schedule.',
      category: 'Infrastructure',
      image: 'https://picsum.photos/400/250?random=111',
      emoji: '🚧',
      gradient: 'from-orange-500 to-red-500',
      publishedAt: new Date('2024-12-10'),
      views: 890
    },
    {
      _id: '3',
      title: 'Environmental Initiative Success',
      content: 'Our recycling program has achieved a 40% increase in waste reduction this quarter.',
      category: 'Environment',
      image: 'https://picsum.photos/400/250?random=112',
      emoji: '🌱',
      gradient: 'from-green-500 to-teal-500',
      publishedAt: new Date('2024-12-05'),
      views: 756
    },
    {
      _id: '4',
      title: 'Cultural Festival Announcement',
      content: 'Join us for the annual Azrou Cultural Festival featuring local artists and traditional performances.',
      category: 'Culture',
      image: 'https://picsum.photos/400/250?random=113',
      emoji: '🎭',
      gradient: 'from-purple-500 to-pink-500',
      publishedAt: new Date('2024-12-01'),
      views: 2150
    }
  ]

  const newsToShow = news && news.length > 0 ? news : defaultNews

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Infrastructure': 'bg-orange-100 text-orange-800',
      'Environment': 'bg-green-100 text-green-800',
      'Culture': 'bg-purple-100 text-purple-800',
      'Health': 'bg-red-100 text-red-800',
      'Education': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className='py-16 bg-gradient-to-br from-blue-50 to-green-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>News & Announcements</h2>
          </div>
          <div className='flex justify-center'>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='py-16 bg-gradient-to-br from-blue-50 to-green-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>News & Announcements</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Stay informed about the latest developments, initiatives, and events in Azrou Municipality.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10'>
          {newsToShow.slice(0, 4).map((article, index) => (
            <div key={article._id || index} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='h-48 overflow-hidden relative'>
                {/* Beautiful gradient backgrounds with emojis for reliable display */}
                <div className={`w-full h-full bg-gradient-to-br ${article.gradient || 'from-blue-500 to-purple-600'} flex items-center justify-center text-white`}>
                  <div className='text-center'>
                    <div className='text-6xl mb-2'>{article.emoji || '📰'}</div>
                    <div className='text-sm font-medium opacity-90'>{article.category}</div>
                  </div>
                </div>
              </div>
              
              <div className='p-6'>
                <div className='flex items-center justify-between mb-3'>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <span className='text-sm text-gray-500'>{formatDate(article.publishedAt)}</span>
                </div>
                
                <h3 className='text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors cursor-pointer'>
                  {article.title}
                </h3>
                
                <p className='text-gray-600 text-sm mb-4'>
                  {article.content}
                </p>
                
                <div className='flex items-center justify-between'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <span className='mr-1'>👀</span>
                    <span>{article.views} views</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/news/${article._id}`)}
                    className='text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors flex items-center gap-1'
                  >
                    Read More <span className='text-base'>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <button 
            onClick={() => navigate('/news')}
            className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2'
          >
            View All News
            <span>📰</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsAnnouncements
