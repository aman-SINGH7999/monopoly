import React from 'react'

const One = () => {
  return (
    <div className='w-10 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex flex-wrap justify-around items-center'>
        <div className='bg-red-800 w-3 h-3 rounded-full'></div>
    </div>
  )
}
const Two = () => {
    return (
      <div className='w-10 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex flex-wrap justify-around items-center'>
            <div className='bg-black w-2 h-2 rounded-full'></div>
            <div className='bg-black w-2 h-2 rounded-full'></div>
      </div>
    )
}
const Three = () => {
    return (
        <div className='w-10 p-2 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex justify-around'>
            <div className='flex items-start'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex items-center'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex items-end'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
           
        </div>
    )
}
const Four = () => {
    return (
        <div className='w-10 p-2 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex flex-col  justify-between'>
            <div className='flex justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
        </div>
    )
}
const Five = () => {
    return (
        <div className='w-10 p-2 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex flex-col justify-between'>
            <div className='flex justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
        </div>
    )
}
const Six = () => {
    return (
        <div className='w-10 p-2 aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex justify-between'>
            <div className='flex flex-col justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
                <div className='bg-black w-2 h-2 rounded-full'></div>
            </div>
        </div>
    )
}

export {One, Two, Three, Four, Five, Six}