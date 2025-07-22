import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const QuickActions = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const quickActions = [
    {
      icon: '📋',
      label: 'Book Appointment',
      action: () => navigate('/services'),
      color: '#667eea'
    },
    {
      icon: '📄',
      label: 'Check Status',
      action: () => navigate('/my-appointments'),
      color: '#4facfe'
    },
    {
      icon: '💰',
      label: 'Pay Fees',
      action: () => navigate('/online-payments'),
      color: '#43e97b'
    },
    {
      icon: '🆘',
      label: 'Emergency',
      action: () => window.open('tel:15'),
      color: '#ff4757'
    },
    {
      icon: '📞',
      label: 'Contact Us',
      action: () => navigate('/contact'),
      color: '#f093fb'
    }
  ]

  return (
    <div className="quick-actions-menu">
      {/* Quick Actions List */}
      <div className={`quick-actions-list ${isOpen ? 'show' : ''}`}>
        {quickActions.map((action, index) => (
          <div
            key={index}
            className="quick-action-item"
            style={{ borderLeft: `4px solid ${action.color}` }}
            onClick={() => {
              action.action()
              setIsOpen(false)
            }}
          >
            <span className="quick-action-icon">{action.icon}</span>
            <span>{action.label}</span>
          </div>
        ))}
      </div>

      {/* Main Quick Action Button */}
      <button
        className="quick-action-main"
        onClick={() => setIsOpen(!isOpen)}
        title="Quick Actions"
      >
        {isOpen ? '✕' : '⚡'}
      </button>
    </div>
  )
}

export default QuickActions
