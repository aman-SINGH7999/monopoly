import React from 'react'
import { Five, Four, One, Six, Three, Two } from './Dice' 
import Dice3D from './Dice3D'
import DiceRoller from './DiceRoller'
import PlayerMovement from './PlayerMovement'

export default function Center() {
  return (
    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-1'>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl'>
          BANK
        </div>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md'>
          <PlayerMovement/>
        </div>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md'>
            <Dice3D id={'unique_id'} front_face={1} clicked={true} setClicked={()=>{}} />
        </div>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl overflow-hidden'>
            <DiceRoller />
        </div>
    </div>
  )
}
