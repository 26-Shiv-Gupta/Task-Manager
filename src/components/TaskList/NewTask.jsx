import React from 'react'

const NewTask = ({ task, handleTaskAccepted, idx }) => {

    return (
        <div className="h-full min-w-[24%] w-[24%] bg-blue-400 rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <div className='flex justify-between'>
                    <h3 className='bg-blue-600 text-sm py-0.5 px-2 rounded font-bold'>{task.category}</h3>
                    <h4 className='font-bold text-sm'>{task.taskDate}</h4>
                </div>
                <div className='flex flex-col justify-between'>
                    <h2 className='font-bold mt-5 text-xl'>{task.taskTitle}</h2>
                    <p className='text-sm mt-2'>{task.taskDescription}</p>
                </div>
            </div>
            <div>
                <button className='w-full py-1 rounded-xl bg-blue-800 m-auto mt-2 cursor-pointer' onClick={() => handleTaskAccepted(idx)}>Accepted</button>
            </div>

        </div>
    )
}

export default NewTask