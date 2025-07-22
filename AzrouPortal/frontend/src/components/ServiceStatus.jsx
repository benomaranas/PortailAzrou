import React, { useState, useEffect } from 'react'

const ServiceStatus = ({ departmentId, departmentName }) => {
  const [status, setStatus] = useState('open')
  const [waitTime, setWaitTime] = useState(15)
  const [queueLength, setQueueLength] = useState(8)
  const [nextAvailable, setNextAvailable] = useState('10:30 AM')

  // Mock real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      const statuses = ['open', 'busy', 'closed']
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
      
      // Mock business hours logic
      const hour = new Date().getHours()
      if (hour >= 8 && hour < 16) {
        if (hour >= 12 && hour < 14) {
          setStatus('closed') // Lunch break
        } else {
          setStatus(Math.random() > 0.3 ? 'open' : 'busy')
        }
      } else {
        setStatus('closed')
      }
      
      // Update wait times
      setWaitTime(Math.floor(Math.random() * 30) + 5)
      setQueueLength(Math.floor(Math.random() * 15) + 1)
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusInfo = () => {
    switch (status) {
      case 'open':
        return {
          icon: '🟢',
          text: 'Open & Available',
          class: 'status-open',
          message: 'Ready to serve you!'
        }
      case 'busy':
        return {
          icon: '🟡',
          text: 'Busy',
          class: 'status-busy',
          message: 'Higher than usual traffic'
        }
      case 'closed':
        return {
          icon: '🔴',
          text: 'Closed',
          class: 'status-closed',
          message: 'Outside business hours'
        }
      default:
        return {
          icon: '⚪',
          text: 'Unknown',
          class: 'status-closed',
          message: 'Status unavailable'
        }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-800 flex items-center gap-2">
          📊 Live Status
        </h4>
        <div className="text-xs text-gray-500 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Live
        </div>
      </div>

      {/* Current Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{statusInfo.icon}</span>
          <div>
            <div className={`status-indicator ${statusInfo.class}`}>
              {statusInfo.text}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              {statusInfo.message}
            </div>
          </div>
        </div>
      </div>

      {/* Wait Time Info */}
      {status === 'open' && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="wait-time justify-center">
              <div className="wait-dot"></div>
              <span>~{waitTime} min wait</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{queueLength}</div>
            <div className="text-xs text-gray-600">people in queue</div>
          </div>
        </div>
      )}

      {/* Next Available */}
      <div className="bg-white rounded-lg p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Next Available:</span>
          <span className="font-semibold text-green-600">
            {status === 'closed' ? 'Tomorrow 8:00 AM' : nextAvailable}
          </span>
        </div>
      </div>

      {/* Quick Actions Based on Status */}
      <div className="mt-3 flex gap-2">
        {status === 'open' && (
          <>
            <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              🚀 Book Now
            </button>
            <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              📞 Call Ahead
            </button>
          </>
        )}
        {status === 'busy' && (
          <>
            <button className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
              ⏰ Schedule Later
            </button>
            <button className="flex-1 bg-purple-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              🔔 Notify Me
            </button>
          </>
        )}
        {status === 'closed' && (
          <button className="w-full bg-gray-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            📅 Schedule for Tomorrow
          </button>
        )}
      </div>
    </div>
  )
}

export default ServiceStatus
