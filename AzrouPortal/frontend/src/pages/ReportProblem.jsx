import React, { useState } from 'react'
import { toast } from 'react-toastify'

const ReportProblem = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    priority: 'Medium',
    description: '',
    image: null
  })

  const problemCategories = [
    'Road Maintenance',
    'Street Lighting',
    'Water Supply',
    'Garbage Collection',
    'Public Safety',
    'Noise Complaint',
    'Building Violations',
    'Environmental Issues',
    'Public Transportation',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.category || !formData.description) {
      toast.error('Please fill in all required fields')
      return
    }

    try {
      // Here you would normally send the data to your backend
      console.log('Problem report submitted:', formData)
      toast.success('Problem report submitted successfully! We will contact you soon.')
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        category: '',
        location: '',
        priority: 'Medium',
        description: '',
        image: null
      })
    } catch (error) {
      toast.error('Failed to submit report. Please try again.')
    }
  }

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Report a Problem</h1>
        <p className='text-gray-600'>Help us improve Azrou by reporting issues in your community</p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Personal Information */}
        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold mb-4 text-gray-700'>Personal Information</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name *</label>
              <input
                type='text'
                name='fullName'
                value={formData.fullName}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Email *</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleInputChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>
        </div>

        {/* Problem Details */}
        <div className='bg-gray-50 p-4 rounded-lg'>
          <h3 className='text-lg font-semibold mb-4 text-gray-700'>Problem Details</h3>
          <div className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Category *</label>
                <select
                  name='category'
                  value={formData.category}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                  required
                >
                  <option value=''>Select a category</option>
                  {problemCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Priority</label>
                <select
                  name='priority'
                  value={formData.priority}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                >
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                  <option value='Urgent'>Urgent</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Location</label>
              <input
                type='text'
                name='location'
                value={formData.location}
                onChange={handleInputChange}
                placeholder='Street address, neighborhood, or landmark'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Description *</label>
              <textarea
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                rows='4'
                placeholder='Please provide a detailed description of the problem...'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Upload Photo (Optional)</label>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
              />
              <p className='text-xs text-gray-500 mt-1'>Photos help us better understand the issue</p>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-all duration-300 font-medium'
        >
          Submit Report
        </button>
      </form>

      <div className='mt-8 p-4 bg-blue-50 rounded-lg'>
        <h4 className='font-semibold text-blue-800 mb-2'>What happens next?</h4>
        <ul className='text-sm text-blue-700 space-y-1'>
          <li>• Your report will be reviewed within 24 hours</li>
          <li>• You'll receive a confirmation email with a tracking number</li>
          <li>• The appropriate department will be notified</li>
          <li>• We'll keep you updated on the progress</li>
        </ul>
      </div>
    </div>
  )
}

export default ReportProblem
