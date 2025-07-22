import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const AllUsers = () => {
    const { aToken, users, getAllUsers } = useContext(AdminContext)
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    useEffect(() => {
        if (aToken) {
            getAllUsers()
        }
    }, [aToken])

    useEffect(() => {
        if (users) {
            let filtered = users.filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            )

            if (statusFilter !== 'all') {
                filtered = filtered.filter(user => 
                    statusFilter === 'active' ? user.isActive : !user.isActive
                )
            }

            setFilteredUsers(filtered)
        }
    }, [users, searchTerm, statusFilter])

    const handleStatusChange = async (userId, currentStatus) => {
        try {
            // This function would be implemented in AdminContext
            await updateUserStatus(userId, !currentStatus)
            getAllUsers() // Refresh the list
            toast.success('User status updated successfully')
        } catch (error) {
            toast.error('Failed to update user status')
        }
    }

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-lg lg:text-xl font-medium'>All Users</h1>
                <div className='flex items-center gap-4'>
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-md'
                    />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className='px-4 py-2 border border-gray-300 rounded-md'
                    >
                        <option value="all">All Users</option>
                        <option value="active">Active Users</option>
                        <option value="inactive">Inactive Users</option>
                    </select>
                </div>
            </div>

            <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
                {filteredUsers.map((user, index) => (
                    <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                        <img className='bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-500' src={user.image || assets.profile_pic} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm'>
                                <div className={`w-2 h-2 rounded-full ${user.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <p className={user.isActive ? 'text-green-600' : 'text-red-600'}>
                                    {user.isActive ? 'Active' : 'Inactive'}
                                </p>
                            </div>
                            <p className='text-neutral-800 text-lg font-medium'>{user.name}</p>
                            <p className='text-zinc-600 text-sm'>{user.email}</p>
                            <p className='text-zinc-600 text-sm'>{user.phone || 'No phone'}</p>
                            <div className='mt-2 flex flex-col gap-1 text-xs text-zinc-500'>
                                <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                                <p>Appointments: {user.appointmentCount || 0}</p>
                            </div>
                            <button
                                onClick={() => handleStatusChange(user._id, user.isActive)}
                                className={`mt-3 px-3 py-1 rounded text-xs font-medium transition-colors ${
                                    user.isActive 
                                        ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                                }`}
                            >
                                {user.isActive ? 'Deactivate' : 'Activate'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredUsers.length === 0 && (
                <div className='text-center py-8'>
                    <p className='text-gray-500'>No users found</p>
                </div>
            )}
        </div>
    )
}

export default AllUsers
