import React from 'react'
import { useSelector } from 'react-redux'

export default function Property({e, angle}) {
  const {properties } = useSelector((state) => state)

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
            <div className='font-semibold text-center'>{properties[e?.index]?.name}</div> 
            <div className='font-semibold'>{properties[e?.index]?.price}</div>
            </div>
        </div>
        <div className={``}>
        </div>
    </div>
  )
}
