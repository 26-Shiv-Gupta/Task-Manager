import React from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask';
import AllTask from '../Common/AllTask';

const AdminDashboard = ({loggedInUserData, handleLogout}) => {

    return (
        <>
            <div className="p-10">
                <Header firstName={loggedInUserData.firstName} handleLogout={handleLogout}/>
                <CreateTask loggedInUserData={loggedInUserData}/>
                <AllTask loggedInUserData={loggedInUserData}/>
            </div>
        </>
    )
}

export default AdminDashboard