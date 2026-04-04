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
                            return { ...t, active: true, newTask: false };
                        }
                        return t;
                    })
                };
            }
            return emp;
        });

        setUserData({ ...userData, employees: updatedEmployees });
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }

    const handleCompleted = (idx) => {
        const updatedEmployees = userData.employees.map(emp => {
            if (emp.firstName === loggedInUserData.firstName) {
                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        active: emp.taskCount.active - 1,
                        completed: emp.taskCount.completed + 1
                    },
                    tasks: emp.tasks.map((t, i) => {
                        if (i === idx) {
                            return { ...t, active: false, completed: true };
                        }
                        return t;
                    })
                }
            }
            return emp;
        })

        setUserData({ ...userData, employees: updatedEmployees })
        localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    }

    const handleFailed = (idx) => {
        const updatedEmployees = userData.employees.map(emp => {
            if(emp.firstName === loggedInUserData.firstName) {
                return {
                    ...emp,
                    taskCount: {
                        ...emp.taskCount,
                        active: emp.taskCount.active - 1,
                        failed: emp.taskCount.failed + 1
                    },
                    tasks: emp.tasks.map((t, i) => {
                        if (i === idx) {
                            return { ...t, active: false, failed: true }
                        }
                        return t;
                    })
                }
            }
            return emp;
        })

        setUserData({ ...userData, employees: updatedEmployees })
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }

    const currentUser = userData?.employees?.find(
        emp => emp.firstName === loggedInUserData.firstName
    );

    if (!currentUser) return null;

    return (
        <div className="flex items-stretch mt-6 py-4 gap-5 overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
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