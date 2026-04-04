import React, { use, useState } from 'react'

const CreateTask = ({ loggedInUserData, allTasks, setNewTask }) => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskAssignTo, setTaskAssignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            "taskAssignTo": taskAssignTo,
            "taskTitle": taskTitle,
            "taskDescription": taskDescription,
            "taskDate": taskDate,
            "taskCategory": taskCategory
        }

        setNewTask(newTask);
    }

    console.log(allTasks);
    
    return (
        <div>
            <form className='p-5 bg-[#1c1c1c]' onSubmit={(e) => handleSubmit(e)}>
                <div className="flex gap-5 h-87.5">
                    <div className='w-[50%]'>
                        <div className='mb-5'>
                            <h3>Task Title</h3>
                            <input
                                required
                                className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border border-white'
                                type="text"
                                placeholder='Make a UI Design'
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                            />
                        </div>
                        <div className='mb-5'>
                            <h3>Date</h3>
                            <input
                                required
                                className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border border-white'
                                type="date"
                                placeholder='dd/mm/yyyy'
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                            />
                        </div>
                        <div className='mb-5'>
                            <h3>Assign To</h3>
                            {/* <select 
                                required
                                className='px-4 py-2 rounded mt-2 w-full outline-none border'
                                name="category" 
                                id="category"
                                placeholder="hi">
                                    <option value="" disabled>Select One</option>
                                    {usersName.map((u, i) => {
                                        <option value={u} key={i}>{u}</option>
                                    })}
                            </select> */}
                            <input
                                required
                                className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border border-white'
                                type="text"
                                value={taskAssignTo}
                                onChange={(e) => setTaskAssignTo(e.target.value)}
                            />
                        </div>
                        <div className='mb-5'>
                            <h3>Category</h3>
                            <input
                                required
                                className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border border-white'
                                type="text"
                                placeholder='Design, Development, etc...'
                                value={taskCategory}
                                onChange={(e) => setTaskCategory(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h3>Description</h3>
                        <textarea
                            required
                            className='bg-transparent h-63 px-4 py-2 rounded mt-2 w-full outline-none border border-white'
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            name="" id="">
                        </textarea>
                        <button className='w-full bg-black rounded py-3 mt-3' type='submit'>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask