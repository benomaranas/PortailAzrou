import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'

const ReportedProblems = () => {
    const { aToken, reportedProblems, getAllReportedProblems } = useContext(AdminContext)
    const [filteredProblems, setFilteredProblems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')
    const [priorityFilter, setPriorityFilter] = useState('all')
    const [selectedProblem, setSelectedProblem] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (aToken) {
            getAllReportedProblems()
        }
    }, [aToken])

    useEffect(() => {
        if (reportedProblems) {
            let filtered = reportedProblems.filter(problem => 
                problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                problem.userName.toLowerCase().includes(searchTerm.toLowerCase())
            )

            if (statusFilter !== 'all') {
                filtered = filtered.filter(problem => problem.status === statusFilter)
            }

            if (priorityFilter !== 'all') {
                filtered = filtered.filter(problem => problem.priority === priorityFilter)
            }

            setFilteredProblems(filtered)
        }
    }, [reportedProblems, searchTerm, statusFilter, priorityFilter])

    const handleUpdateStatus = async (problemId, newStatus, assignedTo = '', adminNotes = '', priority = '') => {
        try {
            // This function would be implemented in AdminContext
            await updateProblemStatus(problemId, newStatus, assignedTo, adminNotes, priority)
            getAllReportedProblems() // Refresh the list
            toast.success('Problem status updated successfully')
            setShowModal(false)
        } catch (error) {
            toast.error('Failed to update problem status')
        }
    }

    const handleDeleteProblem = async (problemId) => {
        if (window.confirm('Are you sure you want to delete this problem report?')) {
            try {
                // This function would be implemented in AdminContext
                await deleteReportedProblem(problemId)
                getAllReportedProblems() // Refresh the list
                toast.success('Problem deleted successfully')
            } catch (error) {
                toast.error('Failed to delete problem')
            }
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Open': return 'bg-red-100 text-red-800'
            case 'In Progress': return 'bg-yellow-100 text-yellow-800'
            case 'Resolved': return 'bg-green-100 text-green-800'
            case 'Closed': return 'bg-gray-100 text-gray-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'Low': return 'bg-blue-100 text-blue-800'
            case 'Medium': return 'bg-yellow-100 text-yellow-800'
            case 'High': return 'bg-orange-100 text-orange-800'
            case 'Critical': return 'bg-red-100 text-red-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-lg lg:text-xl font-medium'>Reported Problems</h1>
                <div className='flex items-center gap-4'>
                    <input
                        type="text"
                        placeholder="Search problems..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-md'
                    />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-md'
                    >
                        <option value="all">All Status</option>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                    </select>
                    <select
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-md'
                    >
                        <option value="all">All Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Critical">Critical</option>
                    </select>
                </div>
            </div>

            <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
                <div className='max-sm:hidden grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] gap-1 py-3 px-6 border-b bg-gray-50 text-gray-600 font-medium'>
                    <p>User</p>
                    <p>Problem</p>
                    <p>Category</p>
                    <p>Priority</p>
                    <p>Status</p>
                    <p>Date</p>
                    <p>Actions</p>
                </div>

                {filteredProblems.map((problem, index) => (
                    <div className='max-sm:flex max-sm:flex-col max-sm:gap-2 grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr_1fr] gap-1 py-3 px-6 border-b hover:bg-gray-50' key={index}>
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>User:</span>
                            <div>
                                <p className='font-medium'>{problem.userName}</p>
                                <p className='text-xs text-gray-500'>{problem.userEmail}</p>
                            </div>
                        </div>
                        
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>Problem:</span>
                            <div>
                                <p className='font-medium'>{problem.title}</p>
                                <p className='text-xs text-gray-600 max-w-xs truncate'>{problem.description}</p>
                                <p className='text-xs text-blue-600'>{problem.location}</p>
                            </div>
                        </div>
                        
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>Category:</span>
                            <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs'>
                                {problem.category}
                            </span>
                        </div>
                        
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>Priority:</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(problem.priority)}`}>
                                {problem.priority}
                            </span>
                        </div>
                        
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(problem.status)}`}>
                                {problem.status}
                            </span>
                        </div>
                        
                        <div className='max-sm:flex max-sm:items-center max-sm:gap-2'>
                            <span className='sm:hidden font-medium'>Date:</span>
                            <p>{new Date(problem.reportedDate).toLocaleDateString()}</p>
                        </div>
                        
                        <div className='flex gap-2'>
                            <button
                                onClick={() => {
                                    setSelectedProblem(problem)
                                    setShowModal(true)
                                }}
                                className='px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 text-xs'
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDeleteProblem(problem._id)}
                                className='px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 text-xs'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProblems.length === 0 && (
                <div className='text-center py-8'>
                    <p className='text-gray-500'>No problems found</p>
                </div>
            )}

            {/* Update Modal */}
            {showModal && selectedProblem && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white p-6 rounded-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto'>
                        <h2 className='text-lg font-medium mb-4'>Update Problem Status</h2>
                        
                        <div className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium mb-1'>Status</label>
                                <select 
                                    defaultValue={selectedProblem.status}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                    id='status-select'
                                >
                                    <option value="Open">Open</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Resolved">Resolved</option>
                                    <option value="Closed">Closed</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className='block text-sm font-medium mb-1'>Priority</label>
                                <select 
                                    defaultValue={selectedProblem.priority}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                    id='priority-select'
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className='block text-sm font-medium mb-1'>Assigned To</label>
                                <input 
                                    type="text"
                                    defaultValue={selectedProblem.assignedTo}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                    id='assigned-input'
                                    placeholder='Enter staff member name'
                                />
                            </div>
                            
                            <div>
                                <label className='block text-sm font-medium mb-1'>Admin Notes</label>
                                <textarea 
                                    defaultValue={selectedProblem.adminNotes}
                                    className='w-full px-3 py-2 border border-gray-300 rounded-md'
                                    id='notes-textarea'
                                    rows="3"
                                    placeholder='Add notes about the problem resolution...'
                                />
                            </div>
                        </div>
                        
                        <div className='flex gap-3 mt-6'>
                            <button
                                onClick={() => {
                                    const status = document.getElementById('status-select').value
                                    const priority = document.getElementById('priority-select').value
                                    const assignedTo = document.getElementById('assigned-input').value
                                    const adminNotes = document.getElementById('notes-textarea').value
                                    handleUpdateStatus(selectedProblem._id, status, assignedTo, adminNotes, priority)
                                }}
                                className='flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
                            >
                                Update
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className='flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReportedProblems
