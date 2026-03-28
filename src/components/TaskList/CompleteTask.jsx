import React from 'react'

const CompleteTask = () => {
    return (
        <div className="h-full min-w-[24%] w-[24%] bg-green-400 rounded-2xl p-6">
            <div className='flex justify-between'>
                <h3 className='bg-green-600 text-sm py-0.5 px-2 rounded font-bold'>High</h3>
                <h4 className='font-bold text-sm'>02 Feb 2026</h4>
            </div>
            <h2 className='font-bold mt-5 text-xl'>Make a Ecommerce website</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt quia, cupiditate aliquam veritatis, porro ad necessitatibus officia ipsam laborum minus nostrum incidunt voluptate autem beatae cumque commodi laudantium deserunt!</p>
        </div>
    )
}

export default CompleteTask