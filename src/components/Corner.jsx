import React from 'react'

export default function Corner({name, logo, pay, color, player1 = "", player2="", subTitle, index}) {
  return (
    <>
    {
      subTitle ? 
        <div className={`bg-white grid grid-cols-12 grid-rows-12 rounded-md border-black border-[1px] box-sell`}>
          <div className="bg-red-500 text-sm md:text-xl col-start-4 col-span-9 row-span-9 flex flex-col justify-center items-center border-[1px] border-black">
              {name}
          </div>

          <div className="col-span-full row-span-3 flex justify-center items-center ">
              {subTitle}
          </div>
        </div>
      : <div className={`${color} relative flex flex-col justify-center items-center rounded-md border-black border-[1px] box-sell`}>
            <div className='text-sm md:text-xl'>{name}</div>
            {player1}
            {player2}
        </div>
    }
    </>
  )
}

