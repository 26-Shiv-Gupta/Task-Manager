import { useContext } from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FaliedTask'
import NewTask from './NewTask'
import { AuthContext } from '../../context/AuthProvider'

const TaskList = ({ loggedInUserData }) => {

    const { userData, setUserData } = useContext(AuthContext);

    const handleTaskAccepted = (idx) => {

        const updatedEmployees = userData.employees.map(emp => {
            if (emp.firstName === loggedInUserData.firstName) {

                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        active: emp.taskCount.active + 1,
                        newTask: emp.taskCount.newTask - 1
                    },
                    tasks: emp.tasks.map((t, i) => {
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
            }
            return emp;
        });

        // Update Context
        setUserData({
            ...userData,
            employees: updatedEmployees
        });

        // Update localStorage
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }

    const handleCompleted = (idx) => {
        const updateEmployees = userData.employees.map(emp => {
            if (emp.firstName === loggedInUserData.firstName) {
                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        active: emp.taskCount.active - 1,
                        completed: emp.taskCount.completed + 1,
                    },
                    tasks: emp.tasks.map((t, i) => {
                        if (i === idx) {
                            return {
                                ...t,
                                active: false,
                                completed: true
                            };
                        }
                        return t;
                    })
                }
            }
            return emp;
        })

        console.log("hi", updateEmployees)
        setUserData({
            ...userData, 
            employees: updateEmployees
        })

        localStorage.setItem('employees', JSON.stringify(updateEmployees))

    }

    const handleFailed = (idx) => {
        console.log("Failed");

    }

    const currentUser = userData?.employees?.find(
        emp => emp.firstName === loggedInUserData.firstName
    );

    if (!currentUser) return null;

    return (
        <div className="flex h-[60%] my-10 py-10 gap-6 overflow-x-auto scroolbar-hidden">
            {currentUser.tasks.map((ele, idx) => {

                if (ele.newTask) {
                    return (
                        <NewTask
                            task={ele}
                            handleTaskAccepted={handleTaskAccepted}
                            idx={idx}
                            key={idx}
                        />
                    )
                }

                if (ele.active) {
                    return (
                        <AcceptTask
                            task={ele}
                            handleCompleted={handleCompleted}
                            handleFailed={handleFailed}
                            idx={idx}
                            key={idx}
                        />
                    )
                }

                if (ele.completed) {
                    return (
                        <CompleteTask
                            task={ele}
                            key={idx}
                        />
                    )
                }

                if (ele.failed) {
                    return <FailedTask task={ele} key={idx} />
                }

                return null;
            })}
        </div>
    )
}

export default TaskList