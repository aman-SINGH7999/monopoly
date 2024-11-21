import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import Player from './Player';
import { TbHandClick } from "react-icons/tb";
import { myContext } from '../context/Context';
/**
 * 
 * @returns need to filter this component
 */
export default function PlayerMovement() {
    const {turn, setTurn, diceClicked, setDiceClicked} =useContext(myContext)
    const max_len = 12;
    const [players, setPlayers] = useState([
        {
            id: 'player-1',
            color: 'bg-red-600',
            parent: 0,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-2',
            color: 'bg-yellow-600',
            parent: 1,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-3',
            color: 'bg-blue-600',
            parent: 0,
            ref: undefined,
            gap: 0
        },
        {
            id: 'player-4',
            color: 'bg-green-600',
            parent: 3,
            ref: undefined,
            gap: 0
        }
    ]);
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
        const gridCells = document.querySelectorAll('#board-temp > div');
        const board = document.getElementById("board-temp");
        console.log(players);
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
    const runPlayer = (event) =>{
        // get random player
        const playerIndex = Math.floor(Math.random()*4);
        const plyr = players[playerIndex];
        console.log(plyr, playerIndex)
        const curentParent = plyr.parent;
        const target = generateTarget(curentParent);
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
    function generateTarget(origin) {
        let n = Math.floor(Math.random()*4);
        if(n==origin) 
            return generateTarget(origin);
        else 
            return n;
    }
    function getNextParent(parent) {
        const path = [0,1,2,3,7,11,15,14,13,12,8,4];
        let tindex = path.indexOf(parent);
        let nIndex = tindex+1;
        if(nIndex>path.length-1) nIndex=0;
        return path[nIndex];
    }
    function generatePath(parent, target) {
        // const path = [0,1,3,2];
        console.log(parent, target);
        const nPath = [];
        let index = 0;
        while(parent != target && index<max_len) {
            console.log(nPath.length)
            nPath.push(parent);
            parent = getNextParent(parent)
            index++;
        }
        nPath.push(target);
        console.log("path: ", nPath)
        return nPath;
    }
    return (
        <div className="relative w-full h-full">
            <div className="grid grid-cols-4 grid-rows-4 gap-1 h-full w-full left-0" id='board-temp'>
                <div className="bg-red-300"></div>
                <div className="bg-green-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-yellow-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-yellow-300"></div>
                <div className="bg-red-300"></div>
                <div className="bg-green-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-red-300"></div>
                <div className="bg-green-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-yellow-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-yellow-300"></div>
                <div className="bg-red-300"></div>
            </div>
            {
                players.map((player, index)=>{
                    return(
                        <Player key={index} id={player.id} color={player.color}/>
                    )
                })
            }
            <div className='absolute h-[50px] w-[50px] border-2 top-[40%] left-[40%] backdrop-blur-sm rounded-full flex justify-center items-center text-2xl text-white font-semibold cursor-pointer active:border-blue-700 active:text-blue-700' onClick={runPlayer}><TbHandClick /></div>
            <div className=''>
                <audio controls>
                    <source src="/Sound/wood-step-sample-1-47664.mp3" type="audio/mpeg" />
                    <source src="horse.mp3" type="audio/mpeg" />
                </audio>
            </div>
        </div>
    )
}
