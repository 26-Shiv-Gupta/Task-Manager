import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className='p-5 bg-gray-600'>
                <div className="flex gap-5 h-[350px]">
                    <div className='w-[50%]'>
                        <div className='mb-5'>
                            <h3>Task Title</h3>
                            <input className='bg-gray-900 px-4 py-2 rounded mt-2 w-full outline-none' type="text" placeholder='Make a UI Design' />
                        </div>
                        <div className='mb-5'>
                            <h3>Date</h3>
                            <input className='bg-gray-900 px-4 py-2 rounded mt-2 w-full outline-none' type="date" placeholder='dd/mm/yyyy' />
                        </div>
                        <div className='mb-5'>
                            <h3>Assign To</h3>
                            <input className='bg-gray-900 px-4 py-2 rounded mt-2 w-full outline-none' type="text" />
                        </div>
                        <div className='mb-5'>
                            <h3>Category</h3>
                            <input className='bg-gray-900 px-4 py-2 rounded mt-2 w-full outline-none' type="text" placeholder='Design, Development, etc...' />
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <h3>Description</h3>
                        <textarea className='bg-gray-900 h-63 px-4 py-2 rounded mt-2 w-full outline-none' name="" id=""></textarea>
                        <button className='w-full bg-black rounded py-3 mt-3' type='submit' onClick={(e) => handleSubmit(e)}>Create Task</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask