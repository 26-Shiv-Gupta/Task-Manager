import React from 'react'

const NewTask = ({ task, handleTaskAccepted, idx }) => {
    return (
        <div className="min-w-70 min-h-70 w-[24%] bg-blue-500/15 border border-blue-500/30 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-blue-500/30 text-blue-300 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                    <h4 className='font-bold text-sm text-slate-400'>{task.taskDate}</h4>
                </div>
                <div className='flex flex-col justify-between'>
                    <h2 className='font-bold mt-5 text-xl text-white'>{task.taskTitle}</h2>
                    <p className='text-sm mt-2 text-slate-400'>{task.taskDescription}</p>
                </div>
            </div>
            <div>
                <button className='w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-sm font-medium mt-4 cursor-pointer transition-all duration-200' onClick={() => handleTaskAccepted(idx)}>Accepted</button>
            </div>
        </div>
    )
}

export default NewTask