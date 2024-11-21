import React, { useEffect, useLayoutEffect, useState, useCallback, useMemo } from "react";
import GameBord from "../components/GameBord";
import { useSelector, useDispatch } from 'react-redux'
import { counter } from "../redux/slice";



export default function Home2() {
  const count = useSelector((state) => state.value)
  const dispatch = useDispatch()

  return (
    <div className="lg:flex text-[6px] md:text-[8px] bg-gray-100 w-full h-screen board-container">
      <GameBord />
      
      <div className=" flex-grow">
        <div className="h-full flex justify-center items-center cursor-pointer" onClick={()=> dispatch(counter())}>click me{count}</div>
      </div>
    </div>
  );
}
