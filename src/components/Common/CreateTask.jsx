import React from 'react'

const CreateTask = ({loggedInUserData}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div>
            <form className='p-5 bg-[#1c1c1c]' onSubmit={(e) => handleSubmit(e)}>
                <div className="flex gap-5 h-[350px]">
                    <div className='w-[50%]'>
                        <div className='mb-5'>
                            <h3>Task Title</h3>
                            <input className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border-1 border-white' type="text" placeholder='Make a UI Design' />
                        </div>
                        <div className='mb-5'>
                            <h3>Date</h3>
                            <input className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border-1 border-white' type="date" placeholder='dd/mm/yyyy' />
                        </div>
                        <div className='mb-5'>
                            <h3>Assign To</h3>
                            <input className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border-1 border-white' type="text" />
                        </div>
                        <div className='mb-5'>
                            <h3>Category</h3>
                            <input className='bg-transparent px-4 py-2 rounded mt-2 w-full outline-none border-1 border-white' type="text" placeholder='Design, Development, etc...' />
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h3>Description</h3>
                        <textarea className='bg-transparent h-63 px-4 py-2 rounded mt-2 w-full outline-none border-1 border-white' name="" id=""></textarea>
                        <button className='w-full bg-black rounded py-3 mt-3' type='submit'>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask