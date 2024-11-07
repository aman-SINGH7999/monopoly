import React from 'react'

export default function Property({e, angle}) {
  return (
    <div className={`${e?.class1} flex ${e?.color} bg-opacity-90 rounded-md border-black border-[1px]`}>
        <div className={`${e?.class2} flex justify-center items-center bg-yellow-500 border-[1px] border-black rounded-md`}>
            <div className='w-2 h-2 m-[1px] bg-yellow-900 rounded-sm'></div>
            <div className='w-2 h-2 m-[1px] bg-yellow-900 rounded-sm'></div>
            <div className='w-2 h-2 m-[1px] bg-yellow-900 rounded-sm'></div>
            <div className='w-2 h-2 m-[1px] bg-yellow-900 rounded-sm'></div>
            <div className='w-2 h-2 m-[1px] bg-yellow-900 rounded-sm'></div>
        </div>
        <div className='w-full h-full flex justify-center items-center  overflow-clip'>
            <div className={`flex flex-col justify-center items-center`}> {/* ${angle} */}
            <div className='font-semibold text-center'>{e?.name}</div> 
            <div className='font-semibold'>{e?.price}</div>
            </div>
        </div>
        <div className={``}>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-1 h-1 md:w-2 md:h-2 bg-red-800 rounded-full'></div>
              <div className='w-2 h-2 md:w-3 md:h-3 bg-red-800 rounded-t-full'></div>
            </div>
        </div>
    </div>
  )
}
