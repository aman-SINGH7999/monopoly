import React, { useLayoutEffect, useState, useEffect, useCallback, useContext } from 'react'
import Property from './Property';
import Corner from './Corner';
import Center from './Center';
import Player from './Player';
import { data_down, data_left, data_right, data_up } from "../data/data";
import { myContext } from '../context/Context';
import { useSelector } from 'react-redux';
import Popup from './Popup';
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
    const [endTurn, setEndTurn] = useState(false);
    const [endTarget, setEndTarget] = useState(39);

    const {turn, setTurn, diceClicked, setDiceClicked} = useContext(myContext)
    const max_len = 40;
    const path = [39,38,37,36,35,34,33,32,31,30,29,19,18,17,16,15,14,13,12,11,0,1,2,3,4,5,6,7,8,9,10,20,21,22,23,24,25,26,27,28];
    const playersList = useSelector((state)=>state.players);
    const [players, setPlayers] = useState(playersList);

    // const customPlayers = [
    //     {
    //         id: 'player-1',
    //         name : 'player-1',
    //         color: 'bg-red-600',
    //         parent: 39,
    //         ref: undefined,
    //         gap: 0
    //     },
    //     {
    //         id: 'player-2',
    //         name : 'player-2',
    //         color: 'bg-yellow-600',
    //         parent: 39,
    //         ref: undefined,
    //         gap: 0
    //     },
    //     {
    //         id: 'player-3',
    //         name : 'player-3',
    //         color: 'bg-blue-600',
    //         parent: 39,
    //         ref: undefined,
    //         gap: 0
    //     },
    //     {
    //         id: 'player-4',
    //         name: 'player-4',
    //         color: 'bg-green-600',
    //         parent: 39,
    //         ref: undefined,
    //         gap: 0
    //     }
    // ]

    // console.log("player list   = ", playersList, playersList === customPlayers)
    // console.log("customPlayers = ", customPlayers, playersList == customPlayers)

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
                const newArray = prevArray.map((elem, idx)=>{
                    console.log("elem",elem)
                    if(idx === index) {
                        return Object.assign({}, elem, {ref:plyr, gap:gap})
                    } else {
                        return elem;
                    }
                })
                console.log("newArray",newArray)
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

    /**
        for single move
        not being used in this app
     */
    
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
        // console.log("number : ", number)
        const playerIndex = turn; //Math.floor(Math.random()*4);
        const plyr = players[playerIndex];
        // console.log(plyr, playerIndex)
        const curentParent = plyr.parent;
        const target = generateTarget(curentParent, number);
        // console.log("playerIndex", playerIndex, "target", target, "origin", curentParent);
        const path = generatePath(curentParent, target);
        console.log("path : ", path, target)
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

            if (index >= path.length){
                // console.log("stop!")
                setTimeout(()=>{
                    setDiceClicked(false)
                    setEndTurn(true)
                    setEndTarget(target)
                    // console.log("Animation stop!")
                },500)
                clearInterval(runAnimation);
            }
        }, 200)
    }
    function generateTarget(origin, length) {
        const index = path.indexOf(origin);
        let newIndex = index+length;
        if(newIndex>39)
            newIndex = newIndex-40;
        const target = path[newIndex];
        // console.log("target : ", target)
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
        while(parent !== target && index<max_len) {
            // console.log("index : ", index)
            // console.log("parent : ", parent)
            nPath.push(parent);
            parent = getNextParent(parent)
            index++;
        }
        nPath.push(target);
        // console.log("path: ", nPath)
        return nPath;
    }

    // find Properties
    const findProperties = (i)=>{
        let data = data_down?.find(({index})=> index === i);
        if(data) return data;
        data = data_left?.find(({index})=> index === i);
        if(data) return data;
        data = data_right?.find(({index})=> index === i);
        if(data) return data;
        data = data_up?.find(({index})=> index === i);
        if(data) return data;
        
        const myArray = [
            {
                name : "START",
                index : 39,
            },
            {
                name : "JAIL",
                index : 29,
            },
            {
                name : "JAIL",
                index : 10,
            },
            {
                name : "PARKING",
                index : 0,
            }
        ]
        data = myArray?.find(({index})=> index === i);
        if(data) return data;
        else return {name : "START",index : 39,}
    }


  return (
    <div className='relative'>
        <div
            className={`grid grid-cols-8 grid-rows-8 aspect-square overflow-hidden`}
            style={style}
            id='board-box'
        >
            <Corner color={"bg-yellow-500"} index={0} name={`PARKING`} />

            <div className="col-span-6 grid grid-cols-9">
            {data_up?.map((e, i) => {
                return <Property key={i} e={e} angle={"rotate-90"} />;
            })}
            </div>

            <Corner color={"bg-red-500"} index={10} name={`JAIL`} />

            <div className="row-span-6 grid grid-rows-9">
            {data_left?.map((e, i) => {
                return <Property key={i} e={e} angle={"rotate-0"} />;
            })}
            </div>

            <div className="col-span-6 row-span-6 p-1">
            <Center clickFunction={runPlayer} endTurn={endTurn} setEndTurn={setEndTurn} />
            </div>

            <div className="row-span-6 grid grid-rows-9">
            {data_right?.map((e, i) => {
                return <Property key={i} e={e} angle={"rotate-0"} />;
            })}
            </div>

            <Corner color={"bg-red-500"} name={"JAIL"} index={29} subTitle={"JUST VISITING"} />

            <div className="col-span-6 grid grid-cols-9">
            {data_down?.map((e, i) => {
                return <Property key={i} e={e} angle={"rotate-90"} />;
            })}
            </div>

            <Corner color={"bg-green-500"} name={`START`} index={39} />
        </div>

        {
            players.map((player, index)=>{
                return(
                    <Player key={index} id={player.id} color={player.color}/>
                )
            })
        }
        {/* <div className='absolute h-[50px] w-[50px] border-2 top-[40%] left-[40%] backdrop-blur-sm rounded-full flex justify-center items-center text-2xl text-white font-semibold cursor-pointer active:border-blue-700 active:text-blue-700' onClick={runPlayer}><TbHandClick /></div> */}
        <Popup playerIndex={endTarget} />
    </div>
  )
}
