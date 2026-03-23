import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  // Two way binding
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, pass);
    
    setEmail('');
    setPass('');
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-2xl w-[400px] p-[60px]'>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col justify-center items-center gap-5'>
          <input 
          required value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className='px-6 py-2 border-2 border-emerald-600 outline-none rounded-4xl w-full' 
          type="email" 
          placeholder='abc@gmail.com' />

          <input 
          required value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          className='px-6 py-2 border-2 border-emerald-600 outline-none rounded-4xl w-full' 
          type="password" 
          placeholder='Password' />

          <button className='bg-emerald-500 border-emerald-600 text-black px-6 py-2 mt-4 border-2 rounded-4xl w-full cursor-pointer'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login