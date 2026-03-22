import React from 'react'
import Header from '../Common/Header'
import CreateTask from '../Common/CreateTask';

const AdminDashboard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <>
            <div className="p-10">
                <Header />
                <CreateTask />
            </div>
        </>
    )
}

export default AdminDashboard