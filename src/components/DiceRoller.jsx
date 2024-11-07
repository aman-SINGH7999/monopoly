import React, { useState } from 'react'
import Dice3D from './Dice3D';

export default function DiceRoller({children}) {
    const [face1, setFace1] = useState(1);
    const [face2, setFace2] = useState(2);
    const [clicked, setClicked] = useState(false);

    const handleClick = (event) => {
        if(!clicked){
            setFace1(generateRandomFace());
            setFace2(generateRandomFace());
            setClicked(true)
        }
    }
    function generateRandomFace() {
        const faces = [1,2,3,4,5,6];
        return faces[Math.floor(Math.random()*6)];
    }

    return (
        <>
            <div className=' p-0 shadow-[0px_0px_30px_#00000028] bg-[#00000015]  flex gap-2 rounded-full cursor-pointer perspective' onClick={handleClick}>
                <div className='h-[50px] mt-[50px] -ml-[22px] w-[150px] absolute roller-plateform roller-plateform-base'></div>
                <Dice3D front_face={face1} id="dice1" clicked={clicked} setClicked={setClicked} />
                <Dice3D front_face={face2} id="dice2" clicked={clicked} setClicked={setClicked} />
            </div>
        </>
    )
}
