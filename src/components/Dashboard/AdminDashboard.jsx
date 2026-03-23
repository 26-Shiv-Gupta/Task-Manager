import React from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask';
import AllTask from '../Common/AllTask';

const AdminDashboard = () => {

    return (
        <>
            <div className="p-10">
                <Header />
                <CreateTask />
                <AllTask />
            </div>
        </>
    )
}

export default AdminDashboard