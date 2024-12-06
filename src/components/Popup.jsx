import React, { useState, useContext } from 'react'
import { addPlayers, addProperties } from '../redux/slice'
import { myContext } from '../context/Context'
import { useSelector, useDispatch } from 'react-redux'

export default function Popup( {playerIndex}) {
    const {turn} = useContext(myContext)
    const {players, properties} = useSelector((state) => state)
    const dispatch = useDispatch();

    const handleBuy = ()=>{
        let newPlayers = [...players]
        let newProperties = [...properties]
        console.log(newPlayers)
        // Object.assign(newPlayers[turn], {'amount': (newPlayers[turn].amount - properties[playerIndex].price)})
        // newPlayers[turn].amount = newPlayers[turn].amount - properties[playerIndex].price;
        newPlayers[turn] = {
            ...newPlayers[turn],
            amount: newPlayers[turn].amount - properties[playerIndex].price
        };
        // newProperties[playerIndex].owner = turn
        newProperties[playerIndex] = {
            ...newProperties[playerIndex],
            owner: turn
        }
        dispatch(addProperties(newProperties));
        dispatch(addPlayers(newPlayers))
    }
  return (
    <div className='absolute flex flex-col justify-center items-center bg-sky-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden shadow-[0_0_20px_1px_#00000088] p-2'>
        <div className='bg-white flex flex-col p-2'>
            <div className='text-2xl font-semibold'>{properties[playerIndex]?.name}</div>
            <div className='text-[15px] font-semibold'>Price : {properties[playerIndex]?.price}</div>
            <div className='text-[15px] font-semibold'>Rent : {properties[playerIndex]?.rent && properties[playerIndex]?.rent[0]} {properties[playerIndex]?.rent?.map((val, i)=>{ return <>{i !== 0 ? <div className='text-[12px]'>Build {i}: {val}</div> : null}</>})}</div>
        </div>
        <div className='w-full flex items-center justify-between pt-2 '>
            <button className='bg-blue-400 font-semibold text-[15px] rounded-xl px-2 text-white border-blue-600 border-[1px]' onClick={handleBuy}>BUY</button>
            <button className='bg-orange-400 font-semibold text-[15px] rounded-xl px-2 text-white border-orange-600 border-[1px]'>AUCTION</button>
        </div>
    </div>
  )
}
