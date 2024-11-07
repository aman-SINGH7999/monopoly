import React from 'react'

export default function Corner({name, logo, pay, color}) {
  return (
    <div className={`${color} flex flex-col justify-center items-center rounded-md border-black border-[1px]`}>
        <div className='text-sm md:text-xl'>{name}</div>

        <div className='flex flex-col justify-center items-center'>
          <div className='w-1 h-1 md:w-2 md:h-2 bg-red-800 rounded-full'></div>
          <div className='w-2 h-2 md:w-3 md:h-3 bg-red-800 rounded-t-full'></div>
        </div>
    </div>
  )
}
