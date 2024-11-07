import React, { useEffect, useLayoutEffect, useState } from 'react'
import Player from './Player';
/**
 * 
 * @returns need to filter this component
 */
export default function PlayerMovement() {
    const players = [
        {
            id: 'player-1',
            color: 'bg-red-600'
        },
        {
            id: 'player-2',
            color: 'bg-yellow-600'
        },
        {
            id: 'player-3',
            color: 'bg-blue-600'
        },
        {
            id: 'player-4',
            color: 'bg-green-600'
        }
    ]
    const [playersObj, setPlayersObj] = useState([]);
    useLayoutEffect(()=>{
        // const player = document.getElementById('player-1');
        const plyrs = document.querySelectorAll('.player');
        plyrs.forEach((plyr, index)=>{
            plyr.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out';
        })
        setPlayersObj(plyrs);
        
        // player.style.transition = 'left 0.3s ease-in-out, top 0.3s ease-in-out';
    }, [])
    useEffect(()=>{
        const gridCells = document.querySelectorAll('#board-temp > div');
        const board = document.getElementById("board-temp")
        function movePlayer(cellIndex, player, playerIndex) {
            const total_players = players.length;
            const half = (total_players*20)/2;
            const gap = (half-(playerIndex*20))*(-1)
            const cellRect = gridCells[cellIndex].getBoundingClientRect();
            const boardRect = board.getBoundingClientRect();
            if(player) {
                player.style.left = (cellRect.left-boardRect.left+(cellRect.width/2)-10-gap) + 'px';
                player.style.top = (cellRect.top-boardRect.top+(cellRect.height/2)-15) + 'px';
            }
        }
        let index = 0;
        const path = [0,1,3,2];
        setInterval(()=>{
            // const playerIndex = Math.floor(Math.random()*4);
            movePlayer(path[index], playersObj[0], 0);
            movePlayer(path[index], playersObj[1], 1);
            movePlayer(path[index], playersObj[2], 2);
            movePlayer(path[index], playersObj[3], 3);
            index++;
            if (index>3)
                index=0;
        }, 500)
    }, [playersObj])
    return (
        <div className="relative w-full h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full w-full left-0" id='board-temp'>
                <div className="bg-red-300"></div>
                <div className="bg-green-300"></div>
                <div className="bg-blue-300"></div>
                <div className="bg-yellow-300"></div>
            </div>
            {
                players.map((player, index)=>{
                    return(
                        <Player key={index} id={player.id} color={player.color}/>
                    )
                })
            }
        </div>
    )
}
