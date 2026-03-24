import React from 'react'

const Header = ({ loggedInUserData }) => {

    return (
        <>
            <div className='flex justify-between items-center pb-10 '>
                <div className=''>
                    <p className='font-medium text-l'>Hello </p>
                    <p className='font-medium text-3xl'>{loggedInUserData.firstName} 👋</p>
                </div>
                <div>
                    <button className='px-7 py-1 bg-red-600 hover:bg-red-700 rounded-[5px] font-medium cursor-pointer'>Logout</button>
                </div>
            </div>
        </>)
}
export default Header