import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FaliedTask'
import NewTask from './NewTask'

const TaskList = ({tasks}) => {
    console.log(tasks);
  return (
    <>
        <div className="flex h-[60%] my-10 py-10 gap-6 overflow-x-auto scroolbar-hidden">
            {tasks.map(() => {
                return 
            })}

        </div>
    </>
  )
}

export default TaskList