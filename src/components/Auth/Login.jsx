import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    
    handleLogin(email, pass);
    
    setEmail('');
    setPass('');
  }

  return (
    <div className='flex items-center justify-center min-h-screen w-screen bg-[#0a0f1e] relative overflow-hidden'>

      {/* Background effects */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none' />
      <div className='absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[120px] pointer-events-none' />

      <div className='relative z-10 bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-2xl w-full max-w-sm mx-4 p-8 sm:p-10'>

        {/* Logo / Title */}
        <div className='mb-8 text-center'>
          <div className='w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-4'>
            <svg className='w-5 h-5 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
            </svg>
          </div>
          <h1 className='text-white text-2xl font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-slate-500 text-sm mt-1'>Sign in to your account</p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col gap-4'>
          <input
            required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 focus:bg-indigo-500/5 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm'
            type="email"
            placeholder='abc@gmail.com'
          />

          <input
            required value={pass}
            onChange={(e) => setPass(e.target.value)}
            className='w-full bg-white/5 border border-white/10 focus:border-indigo-500/60 focus:bg-indigo-500/5 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl outline-none transition-all duration-200 text-sm'
            type="password"
            placeholder='Password'
          />

          <button className='w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white font-medium py-2.5 rounded-xl transition-all duration-200 text-sm tracking-wide shadow-lg shadow-indigo-900/30 cursor-pointer mt-2'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login