import React from 'react'
import Header from '../Common/Header'
import TaskListNumber from '../Common/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <div className='h-screen p-10'>
                <Header />
                <TaskListNumber />
                <TaskList />
            </div>
        </>
    )
}

export default EmployeeDashboard