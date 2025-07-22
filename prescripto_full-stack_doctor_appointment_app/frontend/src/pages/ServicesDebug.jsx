import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ServicesDebug = () => {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true)
        console.log('Making API call to:', 'http://localhost:4000/api/municipality/departments')
        const response = await axios.get('http://localhost:4000/api/municipality/departments')
        console.log('API Response:', response.data)
        
        if (response.data.success) {
          setDepartments(response.data.departments)
          console.log('Departments set:', response.data.departments)
        } else {
          setError('API returned success: false')
        }
      } catch (err) {
        console.error('API Error:', err)
        setError('Failed to fetch departments: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDepartments()
  }, [])

  if (loading) {
    return <div className="p-8">Loading departments...</div>
  }

  if (error) {
    return <div className="p-8 text-red-600">Error: {error}</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Services Debug Page</h1>
      <p>Found {departments.length} departments</p>
      
      {departments.length > 0 ? (
        <div className="grid gap-4 mt-6">
          {departments.map((dept) => (
            <div key={dept._id} className="border p-4 rounded">
              <h3 className="font-bold">{dept.name}</h3>
              <p className="text-gray-600">{dept.description}</p>
              <span className="bg-blue-100 px-2 py-1 rounded text-sm">{dept.category}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No departments found</p>
      )}
    </div>
  )
}

export default ServicesDebug
