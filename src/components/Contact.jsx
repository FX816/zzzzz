import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div id='zzz' className='bg-white dark:bg-[#0e2624]'>
    <div className="flex justify-center items-center pt-10 pb-10 flex-col">
          <h1 className='text-6xl text-black dark:text-[#FFD700]  hover:border-b-4  hover:border-solid duration-200 hover:border-teal-700  hover:text-teal-700 dark:hover:text-teal-700 cursor-pointer '>Contact</h1>
        </div>
      <Form />
    </div>
  )
}

export default Contact