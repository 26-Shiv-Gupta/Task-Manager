import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className='border-2 border-red-500 min-h-[600px] min-w-[300px]'>
            <form className='flex flex-col justify-center gap-5 bg-amber-200'>
                <input className='px-6 py-2 border-2 rounded-4xl' type="email" placeholder='abc@gmail.com'/>
                <input className='px-6 py-2 border-2 rounded-4xl' type="password" placeholder='Password' />
                <button>Login</button>
            </form>
        </div>  
    </div>
  )
}

export default Login