import React, {useContext} from 'react'
import { Five, Four, One, Six, Three, Two } from './Dice' 
import Dice3D from './Dice3D'
import DiceRoller from './DiceRoller'
import PlayerMovement from './PlayerMovement'
import PlayerMovementNew from './PlayerMovementNew'
import { myContext } from '../context/Context'

export default function Center({clickFunction}) {
  const {turn, setTurn} = useContext(myContext)

  return (
    <div className='w-full h-full grid grid-cols-2 grid-rows-2 gap-1'>
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
          turn ?
          `bg-green-400 w-full h-full flex justify-center items-center rounded-md text-2xl overflow-hidden`
          : `bg-green-400 opacity-50 w-full h-full flex justify-center items-center rounded-md text-2xl overflow-hidden`
          }>
            <DiceRoller clickFunction={clickFunction} />
        </div>
    </div>
  )
}
