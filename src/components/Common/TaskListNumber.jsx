import React from 'react'

const TaskListNumber = ({taskCount}) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        <div className='h-32 rounded-2xl p-5 sm:p-6 bg-blue-500/15 border border-blue-500/30 backdrop-blur-sm flex flex-col justify-between'>
          <h2 className='font-bold text-5xl text-white'>{taskCount.newTask}</h2>
          <h3 className='font-bold text-xl text-blue-300'>New Task</h3>
        </div>
        <div className='h-32 rounded-2xl p-5 sm:p-6 bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-sm flex flex-col justify-between'>
          <h2 className='font-bold text-5xl text-white'>{taskCount.completed}</h2>
          <h3 className='font-bold text-xl text-emerald-300'>Completed</h3>
        </div>
        <div className='h-32 rounded-2xl p-5 sm:p-6 bg-amber-500/15 border border-amber-500/30 backdrop-blur-sm flex flex-col justify-between'>
          <h2 className='font-bold text-5xl text-white'>{taskCount.active}</h2>
          <h3 className='font-bold text-xl text-amber-300'>Accepted</h3>
        </div>
        <div className='h-32 rounded-2xl p-5 sm:p-6 bg-red-500/15 border border-red-500/30 backdrop-blur-sm flex flex-col justify-between'>
          <h2 className='font-bold text-5xl text-white'>{taskCount.failed}</h2>
          <h3 className='font-bold text-xl text-red-300'>Failed</h3>
        </div>
      </div>
    </>
  )
}

export default TaskListNumber