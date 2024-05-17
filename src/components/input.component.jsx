import React from 'react'

const Input = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <input type='text' className='rounded text-base p-2 px-4 w-4/5 bg-gray-100 bg-opacity-50 text-black outline-none hover:cursor-pointer placeholder:text-gray-800' placeholder='Create Todo'/>
    </div>
  )
}

export default Input;