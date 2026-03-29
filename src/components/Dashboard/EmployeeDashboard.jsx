import React from 'react'
import Header from '../Common/Header'
import TaskListNumber from '../Common/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ loggedInUserData }) => {
  return (
    <>
      <div className='h-screen p-10'>
        <Header firstName={loggedInUserData.firstName} />
        <TaskListNumber taskCount={loggedInUserData.taskCount} />
        <TaskList loggedInUserData={loggedInUserData} />
      </div>
    </>
  )
}
export default EmployeeDashboard