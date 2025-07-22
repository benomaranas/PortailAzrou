import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const TrackRequest = () => {
  const { token } = useContext(AppContext)
  const [requestId, setRequestId] = useState('')
  const [requestData, setRequestData] = useState(null)
  const [loading, setLoading] = useState(false)

  // Sample data for demonstration
  const sampleRequests = {
    'AZ2025001': {
      id: 'AZ2025001',
      type: 'Birth Certificate',
      department: 'Civil Registry',
      status: 'In Progress',
      submittedDate: '2025-01-15',
      estimatedCompletion: '2025-01-22',
      currentStep: 2,
      totalSteps: 4,
      updates: [
        { date: '2025-01-15', status: 'Request Submitted', description: 'Your request has been received and is being reviewed.' },
        { date: '2025-01-16', status: 'Under Review', description: 'Documents are being verified by our team.' },
        { date: '2025-01-18', status: 'Processing', description: 'Your request is currently being processed.' }
      ]
    },
    'AZ2025002': {
      id: 'AZ2025002',
      type: 'Building Permit',
      department: 'Urban Planning',
      status: 'Pending Documents',
      submittedDate: '2025-01-10',
      estimatedCompletion: '2025-02-01',
      currentStep: 1,
      totalSteps: 5,
      updates: [
        { date: '2025-01-10', status: 'Request Submitted', description: 'Your building permit request has been received.' },
        { date: '2025-01-12', status: 'Pending Documents', description: 'Additional documents required: Property deed, architectural plans.' }
      ]
    },
    'AZ2025003': {
      id: 'AZ2025003',
      type: 'Road Repair Report',
      department: 'Public Works',
      status: 'Completed',
      submittedDate: '2025-01-05',
      estimatedCompletion: '2025-01-12',
      currentStep: 3,
      totalSteps: 3,
      updates: [
        { date: '2025-01-05', status: 'Report Submitted', description: 'Road repair request received for Street 15.' },
        { date: '2025-01-08', status: 'Inspection Scheduled', description: 'Site inspection completed, repair work scheduled.' },
        { date: '2025-01-12', status: 'Completed', description: 'Road repair work has been completed successfully.' }
      ]
    }
  }

  const trackRequest = () => {
    if (!requestId.trim()) {
      alert('Please enter a request ID')
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const foundRequest = sampleRequests[requestId.toUpperCase()]
      if (foundRequest) {
        setRequestData(foundRequest)
      } else {
        setRequestData(null)
        alert('Request not found. Please check your request ID.')
      }
      setLoading(false)
    }, 1000)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in progress': 
      case 'processing': return 'text-blue-600 bg-blue-100'
      case 'pending documents': return 'text-yellow-600 bg-yellow-100'
      case 'under review': return 'text-purple-600 bg-purple-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getProgressPercentage = (current, total) => {
    return (current / total) * 100
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>Track Your Request</h1>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Enter your request ID to track the status of your submitted applications and reports.
        </p>
      </div>

      {/* Search Section */}
      <div className='max-w-md mx-auto mb-8'>
        <div className='flex gap-3'>
          <input
            type='text'
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            placeholder='Enter Request ID (e.g., AZ2025001)'
            className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none'
          />
          <button
            onClick={trackRequest}
            disabled={loading}
            className={`px-6 py-3 bg-primary text-white rounded-lg font-semibold transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
            }`}
          >
            {loading ? 'Tracking...' : 'Track'}
          </button>
        </div>
      </div>

      {/* Sample Request IDs */}
      <div className='max-w-md mx-auto mb-8 p-4 bg-gray-50 rounded-lg'>
        <h3 className='font-semibold text-gray-800 mb-2'>Sample Request IDs for Testing:</h3>
        <div className='text-sm text-gray-600 space-y-1'>
          <p>• AZ2025001 - Birth Certificate (In Progress)</p>
          <p>• AZ2025002 - Building Permit (Pending Documents)</p>
          <p>• AZ2025003 - Road Repair Report (Completed)</p>
        </div>
      </div>

      {/* Request Details */}
      {requestData && (
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white border border-gray-200 rounded-lg shadow-lg p-6'>
            {/* Request Header */}
            <div className='flex justify-between items-start mb-6'>
              <div>
                <h2 className='text-2xl font-bold text-gray-800'>{requestData.type}</h2>
                <p className='text-gray-600'>Request ID: {requestData.id}</p>
                <p className='text-gray-600'>Department: {requestData.department}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(requestData.status)}`}>
                {requestData.status}
              </div>
            </div>

            {/* Progress Bar */}
            <div className='mb-6'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-sm font-medium text-gray-700'>Progress</span>
                <span className='text-sm text-gray-500'>
                  Step {requestData.currentStep} of {requestData.totalSteps}
                </span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div 
                  className='bg-primary h-2 rounded-full transition-all duration-300'
                  style={{ width: `${getProgressPercentage(requestData.currentStep, requestData.totalSteps)}%` }}
                ></div>
              </div>
            </div>

            {/* Request Info */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <h3 className='font-semibold text-gray-800 mb-2'>Request Information</h3>
                <div className='space-y-2 text-sm'>
                  <p><span className='font-medium'>Submitted:</span> {new Date(requestData.submittedDate).toLocaleDateString()}</p>
                  <p><span className='font-medium'>Estimated Completion:</span> {new Date(requestData.estimatedCompletion).toLocaleDateString()}</p>
                  <p><span className='font-medium'>Current Status:</span> {requestData.status}</p>
                </div>
              </div>
              <div>
                <h3 className='font-semibold text-gray-800 mb-2'>Contact Information</h3>
                <div className='space-y-2 text-sm'>
                  <p><span className='font-medium'>Department Phone:</span> +212 535-123-456</p>
                  <p><span className='font-medium'>Email:</span> {requestData.department.toLowerCase().replace(' ', '')}@azrou.ma</p>
                  <p><span className='font-medium'>Office Hours:</span> Mon-Fri 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className='font-semibold text-gray-800 mb-4'>Request Timeline</h3>
              <div className='space-y-4'>
                {requestData.updates.map((update, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='flex flex-col items-center'>
                      <div className={`w-3 h-3 rounded-full ${
                        index === requestData.updates.length - 1 ? 'bg-primary' : 'bg-gray-400'
                      }`}></div>
                      {index !== requestData.updates.length - 1 && (
                        <div className='w-0.5 h-8 bg-gray-300 mt-1'></div>
                      )}
                    </div>
                    <div className='flex-1 pb-4'>
                      <div className='flex justify-between items-center mb-1'>
                        <h4 className='font-semibold text-gray-800'>{update.status}</h4>
                        <span className='text-sm text-gray-500'>{new Date(update.date).toLocaleDateString()}</span>
                      </div>
                      <p className='text-gray-600 text-sm'>{update.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='mt-6 pt-6 border-t border-gray-200 flex gap-3'>
              <button className='px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all'>
                Contact Department
              </button>
              <button className='px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all'>
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Help Section */}
      <div className='max-w-2xl mx-auto mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
        <h3 className='font-semibold text-blue-800 mb-3'>Need Help?</h3>
        <div className='text-sm text-blue-700 space-y-2'>
          <p>• Request IDs are provided when you submit an application or report</p>
          <p>• You can also track requests using your phone number at our office</p>
          <p>• For urgent matters, please call us directly at +212 535-123-456</p>
          <p>• Office hours: Monday to Friday, 8:00 AM to 4:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default TrackRequest
