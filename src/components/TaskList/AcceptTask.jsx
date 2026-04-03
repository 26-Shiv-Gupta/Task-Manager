import React from 'react'

const AcceptTask = ({task, handleCompleted, handleFailed, idx}) => {
    console.log(task)
    return (
        <div className="h-full min-w-[24%] w-[24%] bg-yellow-400 rounded-2xl p-6 flex flex-col justify-between">
            <div>
            <div className='flex justify-between'>
                <h3 className='bg-yellow-600 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                <h4 className='font-bold text-sm'>{task.taskDate}</h4>
            </div>
            <h2 className='font-bold mt-5 text-xl'>{task.taskTitle}</h2>
            <p className='text-sm mt-2'>{task.taskDescription}</p>
            </div>
            <div>
                <button className='w-full py-1 rounded-xl bg-green-800 m-auto mt-2 cursor-pointer' onClick={() => handleCompleted(idx)}>Completed</button>
                <button className='w-full py-1 rounded-xl bg-red-800 m-auto mt-2 cursor-pointer' onClick={() => handleFailed(idx)}>Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask