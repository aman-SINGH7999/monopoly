import React from 'react'

export default function DiceSides({side}) {
  return (
    <div className={`w-10 ${side===5 || side===3?'p-2':''} aspect-square md:w-14 bg-white rounded-md border-transparent border-0 shadow-[inset_0px_0px_5px_1px_#00000055] flex flex-wrap justify-around items-center`}>
        {
            side===1?
            <div className='bg-red-800 w-3 h-3 rounded-full'></div>:
            side===2?
                <>
                    <div className='bg-black w-2 h-2 rounded-full'></div>
                    <div className='bg-black w-2 h-2 rounded-full'></div>
                </>:
            side===3?
                <>
                    <div className='flex items-start h-full'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex items-end h-full'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                </>:
            side===4?
                <>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                </>:
            side===5?
                <>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                </>:
            side===6?
                <>
                    <div className='flex flex-col justify-between gap-[2px]'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                    <div className='flex flex-col justify-between gap-[2px]'>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                        <div className='bg-black w-2 h-2 rounded-full'></div>
                    </div>
                </>:''
        }
    </div>
  )
}
