import React, {useContext, useState} from 'react'
import { Five, Four, One, Six, Three, Two } from './Dice' 
import Dice3D from './Dice3D'
import DiceRoller from './DiceRoller'
import PlayerMovement from './PlayerMovement'
import PlayerMovementNew from './PlayerMovementNew'
import { myContext } from '../context/Context'

export default function Center({clickFunction, endTurn, setEndTurn}) {
  const {turn, setTurn, diceClicked, setDiceClicked, faceValue, setFaceValue} = useContext(myContext)

  const handleTurn = ()=>{
    // console.log("Change turn")
    setTurn((prev)=>{
        prev += 1;
        if(prev >= 4) prev = 0;
        return prev;
    });
    setEndTurn(false);
  }

  return (
    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-1 relative'>
        <div className={ `bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl`
         }>
          BANK
        </div>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md'>
          {/* <PlayerMovement/> */}
        </div>
        <div className='bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl'>
            Empty
        </div>
        <div className={
          !diceClicked ?
          `bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl overflow-hidden`
          : `bg-green-400 opacity-50 w-full h-full flex justify-center items-center rounded-md text-2xl overflow-hidden`
          }>
            <DiceRoller clickFunction={clickFunction} />
        </div>

        {
          faceValue[0] !== faceValue[1] && endTurn 
          ? <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' onClick={handleTurn}>
              <button className='bg-blue-400 text-lg px-3 py-1 rounded-full font-semibold'>END TURN</button>
            </div>
          : null
        }
        
    </div>
  )
}
