import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../context/ApiContext'

const ServicesSimple = () => {
  const navigate = useNavigate()
  const { departments, fetchDepartments, loading } = useApi()

  useEffect(() => {
    console.log('ServicesSimple - useEffect triggered')
    console.log('Current departments:', departments)
    console.log('Loading state:', loading)
    
    fetchDepartments()
  }, [])

  console.log('ServicesSimple render - departments:', departments)
  console.log('ServicesSimple render - loading:', loading)

  return (
    <div className='py-16 bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Municipal Services</h1>
        
        <div className='mb-4'>
          <p>Loading: {loading ? 'Yes' : 'No'}</p>
          <p>Departments count: {departments ? departments.length : 'null'}</p>
        </div>

        {loading && <div>Loading departments...</div>}
        
        {!loading && departments && departments.length === 0 && (
          <div>No departments found</div>
        )}
        
        {!loading && departments && departments.length > 0 && (
          <div className='grid gap-4'>
            {departments.map((dept) => (
              <div key={dept._id} className='bg-white p-4 rounded shadow'>
                <h3 className='font-bold'>{dept.name}</h3>
                <p>{dept.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ServicesSimple
