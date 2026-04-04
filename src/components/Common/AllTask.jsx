import React from 'react'

const AllTask = ({ loggedInUserData, employeesData }) => {

    return (
        <div className='bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-2xl mt-5 p-4 sm:p-6'>
            
            {/* Header */}
            <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center'>
                    <svg className='w-4 h-4 text-slate-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
                    </svg>
                </div>
                <h2 className='text-white font-semibold text-lg tracking-tight'>All Tasks</h2>
            </div>

            {/* Task List */}
            <div className='flex flex-col gap-2.5 max-h-72 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full'>
                {
                    employeesData.map((a, i) => {
                        return (
                            a.tasks.map((t, j) => {
                                return (
                                    <div
                                        key={j}
                                        className={`flex 
                                        ${t.newTask && `bg-blue-500/15 border border-blue-500/30`} 
                                        ${t.active && `bg-amber-500/15 border border-amber-500/30`} 
                                        ${t.completed && `bg-emerald-500/15 border border-emerald-500/30`} 
                                        ${t.failed && `bg-red-500/15 border border-red-500/30`} 
                                        px-4 py-2.5 rounded-xl justify-between items-center transition-all duration-150`}>
                                            <h2 className='text-white text-sm font-medium'>{a.firstName}</h2>
                                            <h3 className='text-slate-400 text-xs hidden sm:block'>{t.category}</h3>
                                            {t.active && <h5 className='text-amber-300 text-xs font-medium px-2.5 py-1 rounded-full bg-black/20'>Active</h5>}
                                            {t.newTask && <h5 className='text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full bg-black/20'>New Task</h5>}
                                            {t.failed && <h5 className='text-red-300 text-xs font-medium px-2.5 py-1 rounded-full bg-black/20'>Failed</h5>}
                                            {t.completed && <h5 className='text-emerald-300 text-xs font-medium px-2.5 py-1 rounded-full bg-black/20'>Completed</h5>}
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllTask