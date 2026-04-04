import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask'
import AllTask from '../Common/AllTask'
import { AuthContext } from '../../context/AuthProvider'

const AdminDashboard = ({ loggedInUserData, handleLogout }) => {
  const { userData } = useContext(AuthContext)
  const [employeesData, setEmployeesData] = useState(userData.employees)
  const [usersName, setUsersName] = useState(null)

  useEffect(() => {
    setUsersName(userData.employees.map(u => u.firstName))
  }, [])

  return (
    <div className='min-h-screen bg-[#0a0f1e] text-white'>
      {/* Subtle background grid */}
      <div className='fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none' />
      {/* Glow accent */}
      <div className='fixed top-0 right-0 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12'>
        <Header firstName={loggedInUserData.firstName} handleLogout={handleLogout} />
        <CreateTask
          loggedInUserData={loggedInUserData}
          employeesData={employeesData}
          setEmployeesData={setEmployeesData}
        />
        <AllTask loggedInUserData={loggedInUserData} employeesData={employeesData} />
      </div>
    </div>
  )
}

export default AdminDashboard