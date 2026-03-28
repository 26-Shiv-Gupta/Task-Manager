import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FaliedTask'
import NewTask from './NewTask'

const TaskList = ({tasks}) => {
  return (
    <>
        <div className="flex h-[60%] my-10 py-10 gap-6 overflow-x-auto scroolbar-hidden">
            {tasks.map((ele, idx) => {
                if(ele.active) {
                    return <AcceptTask task={ele} key={idx}/>
                }

                if(ele.completed) {
                    return <CompleteTask task={ele} key={idx} />
                }

                if(ele.failed) {
                    return <FailedTask task={ele} key={idx} />
                }

                if(ele.newTask) {
                    return <NewTask task={ele} key={idx} />
                }
            })}

        </div>
    </>
  )
}

export default TaskList