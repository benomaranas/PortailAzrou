import React, { useState, useEffect } from 'react'

const ServiceRating = ({ departmentId, departmentName, showReviews = false }) => {
  const [rating, setRating] = useState(0)
  const [userRating, setUserRating] = useState(0)
  const [reviews, setReviews] = useState([])
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [reviewText, setReviewText] = useState('')
  const [averageRating, setAverageRating] = useState(4.2) // Mock data
  const [totalReviews, setTotalReviews] = useState(127) // Mock data

  // Mock reviews data - in real app, this would come from API
  const mockReviews = [
    {
      id: 1,
      user: 'Ahmed M.',
      rating: 5,
      comment: 'Excellent service! Very professional staff and quick processing.',
      date: '2025-01-15',
      helpful: 12
    },
    {
      id: 2,
      user: 'Fatima K.',
      rating: 4,
      comment: 'Good experience overall, but the waiting time could be improved.',
      date: '2025-01-10',
      helpful: 8
    },
    {
      id: 3,
      user: 'Youssef B.',
      rating: 5,
      comment: 'Amazing digital transformation! Much easier than before.',
      date: '2025-01-08',
      helpful: 15
    }
  ]

  useEffect(() => {
    setReviews(mockReviews)
  }, [departmentId])

  const handleRatingSubmit = () => {
    if (userRating === 0) return
    
    const newReview = {
      id: Date.now(),
      user: 'You',
      rating: userRating,
      comment: reviewText,
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    }

    setReviews([newReview, ...reviews])
    setReviewText('')
    setUserRating(0)
    setShowReviewForm(false)
    
    // Mock average update
    const newTotal = totalReviews + 1
    const newAverage = ((averageRating * totalReviews) + userRating) / newTotal
    setAverageRating(Math.round(newAverage * 10) / 10)
    setTotalReviews(newTotal)
  }

  const StarDisplay = ({ rating, size = 'text-lg' }) => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''} ${size}`}
        >
          ★
        </span>
      ))}
    </div>
  )

  const InteractiveStars = ({ onRate }) => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= userRating ? 'filled' : ''} cursor-pointer hover:scale-125`}
          onClick={() => {
            setUserRating(star)
            if (onRate) onRate(star)
          }}
        >
          ★
        </span>
      ))}
    </div>
  )

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Rating Overview */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            📊 Service Rating
          </h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-yellow-600">{averageRating}</div>
            <div className="text-sm text-gray-500">{totalReviews} reviews</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <StarDisplay rating={Math.round(averageRating)} />
          <span className="text-sm text-gray-600">
            Based on {totalReviews} citizen reviews
          </span>
        </div>

        {/* Rating Breakdown */}
        <div className="mt-4 space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = reviews.filter(r => r.rating === stars).length
            const percentage = (count / reviews.length) * 100 || 0
            return (
              <div key={stars} className="flex items-center gap-2 text-sm">
                <span className="w-3">{stars}</span>
                <span className="text-yellow-500">★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="w-12 text-gray-600">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Rate This Service */}
      <div className="p-6 border-b border-gray-100">
        <h4 className="font-semibold text-gray-800 mb-3">Rate Your Experience</h4>
        <div className="flex items-center gap-4 mb-4">
          <InteractiveStars />
          <span className="text-sm text-gray-600">
            {userRating > 0 && `${userRating} star${userRating > 1 ? 's' : ''}`}
          </span>
        </div>
        
        {userRating > 0 && (
          <div className="space-y-3">
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              placeholder="Share your experience to help other citizens..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                onClick={handleRatingSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Submit Review
              </button>
              <button
                onClick={() => {
                  setUserRating(0)
                  setReviewText('')
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Reviews */}
      {showReviews && (
        <div className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Recent Reviews</h4>
          <div className="space-y-4">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="border-l-4 border-blue-200 pl-4 py-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-800">{review.user}</span>
                    <StarDisplay rating={review.rating} size="text-sm" />
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">{review.comment}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <button className="hover:text-blue-600 flex items-center gap-1">
                    👍 Helpful ({review.helpful})
                  </button>
                  <button className="hover:text-blue-600">Reply</button>
                </div>
              </div>
            ))}
          </div>
          
          {reviews.length > 3 && (
            <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All {totalReviews} Reviews →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ServiceRating
