import React, { use, useContext, useEffect, useEffectEvent, useState } from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask';
import AllTask from '../Common/AllTask';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({loggedInUserData, handleLogout}) => {

    const {userData} = useContext(AuthContext);
    const [employeesData, setEmployeesData] = useState(userData.employees);

    const [usersName, setUsersName] = useState(null)

    useEffect(() => {
        let usersName = [];
        userData.employees.map((u, i) => {
            usersName.push(u.firstName)
        })
        setUsersName(usersName);
    }, [])
    
    
    return (
        <>
            <div className="p-10">
                <Header firstName={loggedInUserData.firstName} handleLogout={handleLogout}/>
                <CreateTask loggedInUserData={loggedInUserData} employeesData={employeesData} setEmployeesData={setEmployeesData}/>
                <AllTask loggedInUserData={loggedInUserData} employeesData={employeesData}/>
            </div>
        </>
    )
}

export default AdminDashboard