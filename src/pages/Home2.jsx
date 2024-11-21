import React, {useContext} from "react";
import GameBord from "../components/GameBord";
import { useSelector, useDispatch } from 'react-redux'
import { myContext } from "../context/Context";

// import { counter } from "../redux/slice";



export default function Home2() {
  const {players} = useSelector((state) => state)
  const { turn } = useContext(myContext)
  const dispatch = useDispatch()

  return (
    <div className="lg:flex text-[6px] md:text-[8px] bg-gray-100 w-full h-screen board-container">
      <GameBord />
      
      <div className=" flex-grow">
        <div className="h-full grid grid-rows-8 cursor-pointer" >
            {
              players?.map((player, index)=>{
                  return (
                    <div key={index} className={ turn===index ? `text-sm row-span-1 m-4 p-4 bg-green-700 text-white font-semibold rounded-3xl` :`text-sm row-span-1 m-4 p-4 bg-violet-700 text-white font-semibold rounded-3xl`}>
                      <div>{player?.name}</div>
                      <div>{player?.amount}</div>
                    </div>
                  )
              })
            }
        </div>
      </div>
    </div>
  );
}
