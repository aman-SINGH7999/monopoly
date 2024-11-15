import React from 'react'

export default function Player({id, color="bg-[#ff0000]"}) {
  return (
    <>
        <div className="absolute h-[20px] w-[15px] player drop-shadow-md" id={id}>
            <div className='head bg-black h-[8px] w-[8px] rounded-full mx-auto flex items-end'>
                <div className='face bg-red-200 h-[6px] w-[8px] rounded-full mx-auto flex flex-col justify-center items-center'>
                    <div className='flex justify-around items-center w-full h-2/3'>
                        <div className='bg-black h-[1px] w-[1px] rounded-full'></div>
                        <div className='bg-black h-[1px] w-[1px] rounded-full'></div>
                    </div>
                    <div className='bg-black h-[1px] w-[2px] rounded-full w-full'></div>
                </div>
            </div>
            <div className={`body ${color} h-[12px] w-[13px] rounded-t-full mx-auto border-black border-[0.1px]`}></div>
        </div>
    </>
  )
}
