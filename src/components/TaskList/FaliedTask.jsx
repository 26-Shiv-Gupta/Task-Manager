import React from 'react'

const FailedTask = ({task}) => {
    return (
        <div className="h-full min-w-[24%] w-[24%] bg-red-400 rounded-2xl p-6">
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                <h4 className='font-bold text-sm'>{task.taskDate}</h4>
            </div>
            <h2 className='font-bold mt-5 text-xl'>{task.taskTitle}</h2>
            <p className='text-sm mt-2'>{task.taskDescription}</p>
        </div>
    )
}

export default FailedTask
