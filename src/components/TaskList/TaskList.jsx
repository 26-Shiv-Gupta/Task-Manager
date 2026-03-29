import { useContext, useState } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FaliedTask'
import NewTask from './NewTask'
import { AuthContext } from '../../context/AuthProvider'


const TaskList = ({ loggedInUserData }) => {

    const [data, setData] = useState(loggedInUserData)

    const handleTaskAccepted = (idx) => {
        const updatedData = {
            ...data,
            taskCount: {
                ...data.taskCount,
                active: data.taskCount.active + 1,
                newTask: data.taskCount.newTask - 1
            },
            tasks: data.tasks.map((t, i) => {
                if (i === idx) {
                    return {
                        ...t,
                        active: true,
                        newTask: false
                    };
                }
                return t;
            })
        };

        setData(updatedData);
    }

    return (
        <>
            <div className="flex h-[60%] my-10 py-10 gap-6 overflow-x-auto scroolbar-hidden">
                {data.tasks.map((ele, idx) => {
                    if (ele.newTask) {
                        return <NewTask task={ele} handleTaskAccepted={handleTaskAccepted} idx={idx} key={idx} />
                    }

                    if (ele.active) {
                        return <AcceptTask task={ele} key={idx} />
                    }

                    if (ele.completed) {
                        return <CompleteTask task={ele} key={idx} />
                    }

                    if (ele.failed) {
                        return <FailedTask task={ele} key={idx} />
                    }
                })}

            </div>
        </>
    )
}

export default TaskList