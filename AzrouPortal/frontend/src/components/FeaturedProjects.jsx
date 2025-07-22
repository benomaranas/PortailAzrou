import React, { useEffect } from 'react'
import { useApi } from '../context/ApiContext'

const FeaturedProjects = () => {
  const { projects, fetchProjects, loading } = useApi()

  useEffect(() => {
    if (projects.length === 0) {
      fetchProjects(4)
    }
  }, [])

  const defaultProjects = [
    {
      _id: '1',
      title: 'Smart City Digital Platform',
      description: 'Implementing digital solutions for better citizen services and municipal efficiency.',
      category: 'Technology',
      status: 'In Progress',
      progress: 75,
      budget: 2500000,
      startDate: new Date('2024-01-15'),
      endDate: new Date('2025-06-30')
    },
    {
      _id: '2',
      title: 'Green Parks Initiative',
      description: 'Creating new green spaces and renovating existing parks for community wellness.',
      category: 'Environment',
      status: 'Planning',
      progress: 25,
      budget: 1800000,
      startDate: new Date('2024-03-01'),
      endDate: new Date('2025-12-31')
    },
    {
      _id: '3',
      title: 'Cultural Heritage Center',
      description: 'Preserving and showcasing Azrou\'s rich cultural heritage through a modern center.',
      category: 'Culture',
      status: 'Near Completion',
      progress: 90,
      budget: 3200000,
      startDate: new Date('2023-06-01'),
      endDate: new Date('2024-12-15')
    },
    {
      _id: '4',
      title: 'Road Infrastructure Upgrade',
      description: 'Modernizing road networks and improving connectivity across all districts.',
      category: 'Infrastructure',
      status: 'In Progress',
      progress: 60,
      budget: 4500000,
      startDate: new Date('2024-02-01'),
      endDate: new Date('2025-08-30')
    }
  ]

  const projectsToShow = projects && projects.length > 0 ? projects : defaultProjects

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Progress':
        return 'text-blue-600 bg-blue-100'
      case 'Near Completion':
        return 'text-green-600 bg-green-100'
      case 'Planning':
        return 'text-yellow-600 bg-yellow-100'
      case 'Completed':
        return 'text-emerald-600 bg-emerald-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'Technology': '💻',
      'Environment': '🌱',
      'Culture': '🎭',
      'Infrastructure': '🏗️',
      'Sports': '⚽',
      'Heritage': '🏛️'
    }
    return icons[category] || '📋'
  }

  const formatBudget = (budget) => {
    if (budget >= 1000000) {
      return `${(budget / 1000000).toFixed(1)}M MAD`
    }
    return `${(budget / 1000).toFixed(0)}K MAD`
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short'
    })
  }

  if (loading) {
    return (
      <div className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>Featured Development Projects</h2>
          </div>
          <div className='flex justify-center'>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>Featured Development Projects</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Discover the ongoing and upcoming projects that are shaping the future of Azrou Municipality.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-10'>
          {projectsToShow.slice(0, 4).map((project, index) => (
            <div key={project._id || index} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden'>
                <div className='absolute inset-0 bg-black/20'></div>
                <div className='absolute top-4 left-4'>
                  <span className='text-3xl'>{getCategoryIcon(project.category)}</span>
                </div>
                <div className='absolute top-4 right-4'>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className='absolute bottom-4 left-4 text-white'>
                  <span className='text-sm font-medium'>{project.category}</span>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>{project.title}</h3>
                <p className='text-gray-600 text-sm mb-4'>{project.description}</p>
                
                <div className='mb-4'>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div 
                      className='bg-blue-600 h-2 rounded-full transition-all duration-300' 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <div>
                    <span className='font-medium'>Budget: </span>
                    <span className='text-green-600 font-bold'>{formatBudget(project.budget)}</span>
                  </div>
                  <div>
                    <span className='font-medium'>Timeline: </span>
                    <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          <div className='bg-blue-50 p-6 rounded-lg text-center'>
            <div className='text-3xl font-bold text-blue-600 mb-2'>
              {projectsToShow.filter(p => p.status === 'In Progress').length}
            </div>
            <div className='text-blue-800 font-medium'>Active Projects</div>
          </div>
          <div className='bg-green-50 p-6 rounded-lg text-center'>
            <div className='text-3xl font-bold text-green-600 mb-2'>
              {projectsToShow.filter(p => p.status === 'Near Completion').length}
            </div>
            <div className='text-green-800 font-medium'>Near Completion</div>
          </div>
          <div className='bg-purple-50 p-6 rounded-lg text-center'>
            <div className='text-3xl font-bold text-purple-600 mb-2'>
              {Math.round(projectsToShow.reduce((sum, p) => sum + p.budget, 0) / 1000000)}M
            </div>
            <div className='text-purple-800 font-medium'>Total Investment (MAD)</div>
          </div>
        </div>

        <div className='text-center'>
          <div className='bg-gray-50 rounded-lg p-8'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Want to Learn More?</h3>
            <p className='text-gray-600 mb-6'>
              Get detailed information about all municipal projects, timelines, and community impact.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                View All Projects
              </button>
              <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors'>
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
