import React, { useState, useContext } from 'react'
import Dice3D from './Dice3D';
import { myContext } from '../context/Context';



export default function DiceRoller({clickFunction}) {
    const [face1, setFace1] = useState(1);
    const [face2, setFace2] = useState(2);
    const [clicked, setClicked] = useState(false);
    const {turn, setTurn} =useContext(myContext)


    const handleClick = (event) => {
        if(!clicked){
            const f1 = generateRandomFace();
            const f2 = generateRandomFace();

            setFace1(f1);
            setFace2(f2);
            setClicked(true)

            setTimeout(() => {
                const audio = document.getElementById("audioplay")
                audio.play()
            }, 100);
            
            setTimeout(()=>{
                clickFunction(f1+f2)
            }, 1300)
        }
    }
    function generateRandomFace() {
        const faces = [1,2,3,4,5,6];
        return faces[Math.floor(Math.random()*6)];
    }

    return (
        <>
            <div className=' p-0 shadow-[0px_0px_30px_#00000028] bg-[#00000015] backdrop-blur-sm  flex gap-2 rounded-full cursor-pointer perspective' onClick={handleClick}>
                <div className='h-[50px] mt-[50px] -ml-[22px] w-[150px] absolute roller-plateform roller-plateform-base'></div>
                <Dice3D front_face={face1} id="dice1" clicked={clicked} setClicked={setClicked} />
                <Dice3D front_face={face2} id="dice2" clicked={clicked} setClicked={setClicked} />
                <audio controls className='hidden' id="audioplay">
                    <source src="/dice2.mp3" type="audio/ogg"/>
                </audio>
            </div>
        </>
    )
}
