import React, { useEffect, useLayoutEffect, useState, useCallback, useMemo } from "react";
import { data_down, data_left, data_right, data_up } from "../data/data";
import Property from "../components/Property";
import Corner from "../components/Corner";
import Center from "../components/Center";
import Player from "../components/Player";

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const handleResize = useCallback(() => {
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', 
 handleResize);
  }, [handleResize]);

  return size;
};
export default function Home() {
  const [width] = useWindowSize();
  const [style, setStyle] = useState({});
  useLayoutEffect(() => {
    const newWidth = Math.min(width, window.innerHeight - 135);
    setStyle({width: newWidth+'px !important', height: newWidth+'px !important'});
  }, [width]);
  const memoizedData = useMemo(() => {
    return {
      data_up,
      data_left,
      data_right,
      data_down,
    };
  }, []);
  return (
    <div className="lg:flex text-[6px] md:text-[8px] bg-gray-100 w-full h-screen board-container">
      <div
        className={`grid grid-cols-8 grid-rows-8 aspect-square overflow-hidden`}
        id="game-board"
        style={style}
      >
        <Corner color={"bg-yellow-500"} name={"PARKING"} />

        <div className="col-span-6 grid grid-cols-9">
          {data_up?.map((e, i) => {
            return <Property key={i} e={e} angle={"rotate-90"} />;
          })}
        </div>

        <Corner color={"bg-red-500"} name={"JAIL"} />

        <div className="row-span-6 grid grid-rows-9">
          {data_left?.map((e, i) => {
            return <Property key={i} e={e} angle={"rotate-0"} />;
          })}
        </div>

        <div className="col-span-6 row-span-6 p-1">
          <Center />
        </div>

        <div className="row-span-6 grid grid-rows-9">
          {data_right?.map((e, i) => {
            return <Property key={i} e={e} angle={"rotate-0"} />;
          })}
        </div>

        <div
          className={`bg-white grid grid-cols-12 grid-rows-12 rounded-md border-black border-[1px]`}
        >
          <div className="bg-red-500 text-sm md:text-xl col-start-4 col-span-9 row-span-9 flex flex-col justify-center items-center border-[1px] border-black">
            JAIL
          </div>

          <div className="col-span-full row-span-3 flex justify-center items-center ">
            JUST VISITING
          </div>
        </div>

        <div className="col-span-6 grid grid-cols-9">
          {data_down?.map((e, i) => {
            return <Property key={i} e={e} angle={"rotate-90"} />;
          })}
        </div>

        <Corner color={"bg-green-500"} name={"START"} player1={<Player />} player2={<Player />} />
      </div>

      {/* ********************************************************* */}
      <div className=" flex-grow">
        <div className="h-full flex justify-center items-center">right</div>
      </div>
    </div>
  );
}
