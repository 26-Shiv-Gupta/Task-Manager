import React from 'react'

const AllTask = ({ loggedInUserData, allTasks }) => {

    return (
        <div className='flex flex-col p-2 bg-[#1c1c1c] mt-5 gap-2 h-50 overflow-y-auto scroolbar-hidden'>

            {
                allTasks.map((a, i) => {
                    return (
                        a.tasks.map((t, j) => {
                            return (
                                <div
                                    className={`flex 
                                    ${t.newTask && `bg-blue-400`} 
                                    ${t.active && `bg-yellow-400`} 
                                    ${t.completed && `bg-green-400`} 
                                    ${t.failed && `bg-red-400`} 
                                    px-3 py-1 justify-between`}>
                                        <h2>{a.firstName}</h2>
                                        <h3>{t.category}</h3>
                                        {t.active && <h5>Active</h5>}
                                        {t.newTask && <h5>New Task</h5>}
                                        {t.failed && <h5>Failed</h5>}
                                        {t.completed && <h5>Completed</h5>}
                                </div>
                            )
                        })
                    )
                })
            }
        </div>
    )
}

export default AllTask