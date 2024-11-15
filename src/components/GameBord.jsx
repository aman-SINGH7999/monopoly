import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react'
import Property from './Property';
import Corner from './Corner';
import Center from './Center';
import Player from './Player';
import { data_down, data_left, data_right, data_up } from "../data/data";
// import { TbHandClick } from "react-icons/tb";

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





export default function GameBord() {
    const [width] = useWindowSize();
    const [style, setStyle] = useState({});
    const max_len = 40;
    const path = [39,38,37,36,35,34,33,32,31,30,29,19,18,17,16,15,14,13,12,11,0,1,2,3,4,5,6,7,8,9,10,20,21,22,23,24,25,26,27,28];
    const [players, setPlayers] = useState([
        {
            id: 'player-1',
            color: 'bg-red-600',
            parent: 39,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-2',
            color: 'bg-yellow-600',
            parent: 39,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-3',
            color: 'bg-blue-600',
            parent: 39,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-4',
            color: 'bg-green-600',
            parent: 39,
            ref: undefined,
            gap: 0
        }
    ]);

  useLayoutEffect(() => {
    const newWidth = Math.min(width, window.innerHeight - 135);
    setStyle({width: newWidth+'px !important', height: newWidth+'px !important'});
  }, [width]);

// ******************* Player Movement
const [playersObj, setPlayersObj] = useState([]);
    useLayoutEffect(()=>{
        const plyrs = document.querySelectorAll('.player');
        const total_players = players.length;
        const half = (total_players*20)/2;
        plyrs.forEach((plyr, index)=>{
            plyr.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out';
            const gap = (half-(index*8))*(-1);
            setPlayers(prevArray => {
                const newArray = [...prevArray]; // Create a copy of the array
                if(newArray[index]) {
                    newArray[index].ref = plyr;
                    newArray[index].gap = gap;
                } // Modify the 'b' property of the nth object
                return newArray;
              });
        })
    }, [])

    useEffect(()=>{
        const gridCells = document.querySelectorAll('.box-sell');
        // console.log("box-Cell : ", gridCells)
        const board = document.getElementById("board-box");
        // console.log("players : ",players);
       
        players.forEach((player, index)=>{
            if(player && player.ref && gridCells && board) {
                let parent = player.parent;
                let gap = player.gap;
                // console.log(parent);
                const cellRect = gridCells[parent].getBoundingClientRect();
                // console.log(gridCells[parent], parent)
                const boardRect = board.getBoundingClientRect();
                // console.log("style: ", player.ref)
                player.ref.style.left = (cellRect.left-boardRect.left+(cellRect.width/2)-35-gap) + 'px';
                player.ref.style.top = (cellRect.top-boardRect.top+(cellRect.height/2)-10) + 'px';
            }
        })
    }, [players])

    const movePlayer = (event) =>{
        // get random player
        const playerIndex = Math.floor(Math.random()*4);
        const plyr = players[playerIndex];
        const curentParent = plyr.parent;
        const newParent = getNextParent(curentParent);
        setPlayers(prevArray => {
            const newArray = [...prevArray];
            if(newArray[playerIndex]) {
                newArray[playerIndex].parent = newParent;
            }
            return newArray;
          });
    }
    const runPlayer = (number) =>{
        // get random player
        console.log("number : ", number)
        const playerIndex = Math.floor(Math.random()*4);
        const plyr = players[playerIndex];
        // console.log(plyr, playerIndex)
        const curentParent = plyr.parent;
        const target = generateTarget(curentParent, number);
        console.log("playerIndex", playerIndex, "target", target, "origin", curentParent);
        const path = generatePath(curentParent, target);
        let index = 1;
        const runAnimation = setInterval(()=>{
            const newParent = path[index];
            setPlayers(prevArray => {
                const newArray = [...prevArray];
                if(newArray[playerIndex]) {
                    newArray[playerIndex].parent = newParent;
                }
                return newArray;
              });
            index++;
            if (index >= path.length)
                clearInterval(runAnimation);
        }, 200)
    }
    function generateTarget(origin, length) {
        const index = path.indexOf(origin);
        let newIndex = index+length;
        if(newIndex>39)
            newIndex = 0;
        const target = path[newIndex];
        return target;
    }
    function getNextParent(parent) {
        let tindex = path.indexOf(parent);
        let nIndex = tindex+1;
        if(nIndex>path.length-1) nIndex=0;
        return path[nIndex];
    }
    function generatePath(parent, target) {
        // const path = [0,1,3,2];
        // console.log(parent, target);
        const nPath = [];
        let index = 0;
        while(parent != target && index<max_len) {
            // console.log(nPath.length)
            nPath.push(parent);
            parent = getNextParent(parent)
            index++;
        }
        nPath.push(target);
        // console.log("path: ", nPath)
        return nPath;
    }


  return (
    <div className=''>
        <div
            className={`grid grid-cols-8 grid-rows-8 aspect-square overflow-hidden`}
            style={style}
            id='board-box'
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
            <Center clickFunction={runPlayer} />
            </div>

            <div className="row-span-6 grid grid-rows-9">
            {data_right?.map((e, i) => {
                return <Property key={i} e={e} angle={"rotate-0"} />;
            })}
            </div>

            <div className={`bg-white grid grid-cols-12 grid-rows-12 rounded-md border-black border-[1px] box-sell`}>
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

            <Corner color={"bg-green-500"} name={"START"} />
        </div>

        {
            players.map((player, index)=>{
                return(
                    <Player key={index} id={player.id} color={player.color}/>
                )
            })
        }
        {/* <div className='absolute h-[50px] w-[50px] border-2 top-[40%] left-[40%] backdrop-blur-sm rounded-full flex justify-center items-center text-2xl text-white font-semibold cursor-pointer active:border-blue-700 active:text-blue-700' onClick={runPlayer}><TbHandClick /></div> */}
    </div>
  )
}
