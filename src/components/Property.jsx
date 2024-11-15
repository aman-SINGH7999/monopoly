import React from 'react'

export default function Property({e, angle}) {
  return (
    <div className={`${e?.class1} flex ${e?.color} bg-opacity-90 rounded-md border-black border-[0.1px] box-sell`}>
        <div className={`${e?.class2} flex justify-center items-center bg-yellow-500 border-[0.1px] border-black rounded-md`}>
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
  
        </div>
    </div>
  )
}
