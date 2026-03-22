import React from 'react'
import Header from '../Common/Header'
import TaskListNumber from '../Common/TaskListNumber'

const EmployeeDashboard = () => {
    return (
        <>
            <div className='h-screen p-10'>
                <Header />
                <TaskListNumber />
            </div>
        </>
    )
}

export default EmployeeDashboard