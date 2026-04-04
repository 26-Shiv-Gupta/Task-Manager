import React, { useContext } from 'react'
import Header from '../Common/Header'
import TaskListNumber from '../Common/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ loggedInUserData, handleLogout }) => {

  const { userData } = useContext(AuthContext);

  const currentUser = userData?.employees?.find(
    emp => emp.firstName === loggedInUserData.firstName
  );

  if (!currentUser) return null;

  return (
    <div className='min-h-screen bg-[#0a0f1e] relative overflow-hidden'>
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none' />
      <div className='absolute top-0 right-0 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12'>
        <Header firstName={currentUser.firstName} handleLogout={handleLogout}/>
        <TaskListNumber taskCount={currentUser.taskCount} />
        <TaskList loggedInUserData={currentUser} />
      </div>
    </div>
  )
}

export default EmployeeDashboard