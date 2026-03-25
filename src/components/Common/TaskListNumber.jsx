import React from 'react'
const TaskListNumber = ({loggedInUserData}) => {
  return (
    <>
      <div className="flex justify-between gap-10">
        <div className='h-[150px] w-[45%] rounded-2xl p-5 bg-blue-400'>
          <h2 className='font-bold text-5xl'>0</h2>
          <h3 className='font-bold text-xl'>New Task</h3>
        </div>
        <div className='h-[150px] w-[45%] rounded-2xl p-5 bg-green-400'>
          <h2 className='font-bold text-5xl'>3</h2>
          <h3 className='font-bold text-xl'>Completed</h3>
        </div>
        <div className='h-[150px] w-[45%] rounded-2xl p-5 bg-yellow-400'>
          <h2 className='font-bold text-5xl'>0</h2>
          <h3 className='font-bold text-xl'>Accepted</h3>
        </div>
        <div className='h-[150px] w-[45%] rounded-2xl p-5 bg-red-400'>
          <h2 className='font-bold text-5xl'>1</h2>
          <h3 className='font-bold text-xl'>Failed</h3>
        </div>
      </div>
    </>
  )
}
export default TaskListNumber