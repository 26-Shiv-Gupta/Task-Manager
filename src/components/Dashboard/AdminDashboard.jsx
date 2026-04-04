import React, { use, useContext, useEffect, useEffectEvent, useState } from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask';
import AllTask from '../Common/AllTask';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({loggedInUserData, handleLogout}) => {

    const {userData} = useContext(AuthContext);
    const [newTask, setNewTask] = useState(null);
    const [allTasks, setAllTasks] = useState(null);

    const [usersName, setUsersName] = useState(null)

    useEffect(() => {
        let usersName = [];
        userData.employees.map((u, i) => {
            usersName.push(u.firstName)
        })
        setUsersName(usersName);
        setAllTasks(userData.employees);
    }, [])
    
    
    return (
        <>
            <div className="p-10">
                {console.log(allTasks)}
                <Header firstName={loggedInUserData.firstName} handleLogout={handleLogout}/>
                <CreateTask loggedInUserData={loggedInUserData} setNewTask={setNewTask}/>
                <AllTask loggedInUserData={loggedInUserData} allTasks={userData.employees} newTask={newTask}/>
            </div>
        </>
    )
}

export default AdminDashboard