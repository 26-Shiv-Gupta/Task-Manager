import React from 'react'

const FailedTask = ({task}) => {
    return (
        <div className="min-w-70 min-h-70 w-[24%] bg-red-500/15 border border-red-500/30 backdrop-blur-sm rounded-2xl p-6">
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-500/30 text-red-300 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                <h4 className='font-bold text-sm text-slate-400'>{task.taskDate}</h4>
            </div>
            <h2 className='font-bold mt-5 text-xl text-white'>{task.taskTitle}</h2>
            <p className='text-sm mt-2 text-slate-400'>{task.taskDescription}</p>
        </div>
    )
}

export default FailedTask