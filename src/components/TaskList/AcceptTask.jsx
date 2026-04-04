import React from 'react'

const AcceptTask = ({task, handleCompleted, handleFailed, idx}) => {
    console.log(task)
    return (
        <div className="min-w-70 min-h-70 w-[24%] bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-amber-500/30 text-amber-300 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                    <h4 className='font-bold text-sm text-slate-400'>{task.taskDate}</h4>
                </div>
                <h2 className='font-bold mt-5 text-xl text-white'>{task.taskTitle}</h2>
                <p className='text-sm mt-2 text-slate-400'>{task.taskDescription}</p>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <button className='w-full py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-500/30 text-emerald-300 text-sm font-medium cursor-pointer transition-all duration-200' onClick={() => handleCompleted(idx)}>Completed</button>
                <button className='w-full py-2 rounded-xl bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 text-red-300 text-sm font-medium cursor-pointer transition-all duration-200' onClick={() => handleFailed(idx)}>Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask