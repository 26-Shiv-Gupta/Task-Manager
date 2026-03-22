import React from 'react'
import Header from '../Common/Header'
import TaskListNumber from '../Common/TaskListNumber'

const EmployeeDashboard = () => {
    return (
        <>
            <div className='h-screen'>
                <Header />
                <TaskListNumber />
            </div>
        </>
    )
}

export default EmployeeDashboard