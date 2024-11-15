import React from 'react'

export default function Corner({name, logo, pay, color, player1 = "", player2=""}) {
  return (
    <div className={`${color} relative flex flex-col justify-center items-center rounded-md border-black border-[1px] box-sell`}>
        <div className='text-sm md:text-xl'>{name}</div>
        {player1}
        {player2}
    </div>
  )
}
