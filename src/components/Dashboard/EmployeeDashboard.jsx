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
    <div className='h-screen p-10'>
      <Header firstName={currentUser.firstName} handleLogout={handleLogout}/>
      <TaskListNumber taskCount={currentUser.taskCount} />
      <TaskList loggedInUserData={currentUser} />
    </div>
  )
}

export default EmployeeDashboard