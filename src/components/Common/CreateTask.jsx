import React, { useState } from 'react'

const CreateTask = ({ loggedInUserData, employeesData, setEmployeesData }) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskAssignTo, setTaskAssignTo] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedData = employeesData.map((emp) => {
      if (emp.firstName === taskAssignTo) {
        return {
          ...emp,
          taskCount: { ...emp.taskCount, newTask: emp.taskCount.newTask + 1 },
          tasks: [
            ...emp.tasks,
            {
              active: false,
              newTask: true,
              completed: false,
              failed: false,
              taskTitle,
              taskDescription,
              taskDate,
              category: taskCategory,
            },
          ],
        }
      }
      return emp
    })

    setEmployeesData(updatedData)
    localStorage.setItem('employees', JSON.stringify(updatedData))
    setTaskDescription(''); setTaskCategory(''); setTaskAssignTo(''); setTaskDate(''); setTaskTitle('')
  }

  const inputClass = 'w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 focus:bg-indigo-500/5 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm mt-2'
  const labelClass = 'block text-slate-400 text-xs font-medium tracking-wider uppercase'

  return (
    <div className='bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm mb-6'>
      <div className='flex items-center gap-3 mb-7'>
        <div className='w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center'>
          <svg className='w-4 h-4 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
          </svg>
        </div>
        <h2 className='text-white font-semibold text-lg tracking-tight'>Create New Task</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
          {/* Left Column */}
          <div className='flex flex-col gap-5'>
            <div>
              <label className={labelClass}>Task Title</label>
              <input required className={inputClass} type='text' placeholder='e.g. Make a UI Design'
                value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Due Date</label>
              <input required className={`${inputClass} [color-scheme:dark]`} type='date'
                value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Assign To</label>
              <input required className={inputClass} type='text' placeholder='Employee name'
                value={taskAssignTo} onChange={(e) => setTaskAssignTo(e.target.value)} />
            </div>
            <div>
              <label className={labelClass}>Category</label>
              <input required className={inputClass} type='text' placeholder='Design, Development, etc.'
                value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} />
            </div>
          </div>

          {/* Right Column */}
          <div className='flex flex-col'>
            <label className={labelClass}>Description</label>
            <textarea required
              className={`${inputClass} flex-1 resize-none min-h-[160px] lg:min-h-0`}
              placeholder='Describe the task in detail...'
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button type='submit'
              className='mt-4 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium py-3 rounded-xl transition-all duration-200 text-sm tracking-wide shadow-lg shadow-indigo-900/30 cursor-pointer'>
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask