import React, { useEffect, useLayoutEffect, useState, useCallback, useMemo } from "react";
import GameBord from "../components/GameBord";



export default function Home2() {

  return (
    <div className="lg:flex text-[6px] md:text-[8px] bg-gray-100 w-full h-screen board-container">
      <GameBord />
      
      <div className=" flex-grow">
        <div className="h-full flex justify-center items-center">right</div>
      </div>
    </div>
  );
}
