import React from 'react'

const Header = ({ firstName, handleLogout }) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <div>
        <p className='text-slate-400 text-sm font-light tracking-widest uppercase mb-1'>Welcome back</p>
        <p className='text-white text-4xl font-semibold tracking-tight'>{firstName} <span className='text-2xl'>👋</span></p>
      </div>
      <button
        onClick={handleLogout}
        className='group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-slate-300 hover:text-red-400 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer'
      >
        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
        </svg>
        Logout
      </button>
    </div>
  )
}

export default Header