import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
  const navigate = useNavigate()
  const { token, userData } = useContext(AppContext)
  
  // Mock data for demonstration
  const [stats] = useState({
    pendingApplications: 3,
    activeServices: 12,
    totalPayments: 1250,
    reportsSubmitted: 2
  })

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'appointment',
      title: 'Business License Appointment',
      date: '2025-01-22',
      status: 'confirmed',
      icon: '🏪'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Property Tax Payment',
      date: '2025-01-20',
      status: 'completed',
      icon: '💰'
    },
    {
      id: 3,
      type: 'report',
      title: 'Street Light Issue Report',
      date: '2025-01-18',
      status: 'in-progress',
      icon: '💡'
    }
  ])

  const [quickActions] = useState([
    {
      title: 'Book Service Appointment',
      description: 'Schedule a meeting with municipal departments',
      icon: '📅',
      action: () => navigate('/services'),
      color: 'bg-blue-500'
    },
    {
      title: 'Pay Bills Online',
      description: 'Pay taxes, fees, and municipal bills',
      icon: '💳',
      action: () => navigate('/online-payments'),
      color: 'bg-green-500'
    },
    {
      title: 'Report a Problem',
      description: 'Report issues in your community',
      icon: '📢',
      action: () => navigate('/report-problem'),
      color: 'bg-orange-500'
    },
    {
      title: 'City Information',
      description: 'Learn about Azrou and its services',
      icon: '🏛️',
      action: () => navigate('/city-info'),
      color: 'bg-purple-500'
    }
  ])

  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'text-green-600 bg-green-100'
      case 'completed': return 'text-blue-600 bg-blue-100'
      case 'in-progress': return 'text-yellow-600 bg-yellow-100'
      case 'pending': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (!token) {
    return (
      <div className='text-center py-20'>
        <div className='text-6xl mb-4'>🔒</div>
        <h2 className='text-2xl font-semibold mb-4'>Access Restricted</h2>
        <p className='text-gray-600 mb-6'>Please log in to access your municipality dashboard</p>
        <button 
          onClick={() => navigate('/login')}
          className='bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all'
        >
          Login to Continue
        </button>
      </div>
    )
  }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      {/* Welcome Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>
          Welcome back, {userData?.name || 'Citizen'}!
        </h1>
        <p className='text-gray-600'>Manage your municipal services and stay connected with Azrou</p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Pending Applications</p>
              <p className='text-2xl font-bold text-gray-800'>{stats.pendingApplications}</p>
            </div>
            <div className='text-3xl'>📋</div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Active Services</p>
              <p className='text-2xl font-bold text-gray-800'>{stats.activeServices}</p>
            </div>
            <div className='text-3xl'>⚡</div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Total Payments (MAD)</p>
              <p className='text-2xl font-bold text-gray-800'>{stats.totalPayments}</p>
            </div>
            <div className='text-3xl'>💰</div>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-gray-600 mb-1'>Reports Submitted</p>
              <p className='text-2xl font-bold text-gray-800'>{stats.reportsSubmitted}</p>
            </div>
            <div className='text-3xl'>📊</div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Quick Actions */}
        <div className='lg:col-span-2'>
          <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {quickActions.map((action, index) => (
              <div
                key={index}
                onClick={action.action}
                className='bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all cursor-pointer group'
              >
                <div className='flex items-start gap-4'>
                  <div className={`${action.color} text-white p-3 rounded-lg text-2xl group-hover:scale-110 transition-all`}>
                    {action.icon}
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-gray-800 mb-1'>{action.title}</h3>
                    <p className='text-sm text-gray-600'>{action.description}</p>
                  </div>
                  <div className='text-gray-400 group-hover:text-gray-600 transition-all'>
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Recent Activity</h2>
          <div className='bg-white rounded-lg shadow-sm border p-6'>
            <div className='space-y-4'>
              {recentActivity.map((activity) => (
                <div key={activity.id} className='flex items-start gap-3 pb-4 border-b last:border-b-0 last:pb-0'>
                  <div className='text-2xl'>{activity.icon}</div>
                  <div className='flex-1'>
                    <h4 className='font-medium text-gray-800 text-sm'>{activity.title}</h4>
                    <p className='text-xs text-gray-500 mb-2'>{activity.date}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(activity.status)}`}>
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/my-appointments')}
              className='w-full mt-4 text-center text-primary hover:text-primary/80 transition-all text-sm font-medium'
            >
              View All Activities →
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className='mt-8 bg-red-50 border border-red-200 rounded-lg p-6'>
        <div className='flex items-center gap-3'>
          <div className='text-3xl'>🚨</div>
          <div>
            <h3 className='font-semibold text-red-800 mb-1'>Emergency Municipal Services</h3>
            <p className='text-red-700 text-sm'>
              For urgent municipal issues outside office hours, call: <strong>190</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
