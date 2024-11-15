import React, { useEffect, useState } from 'react'
import './ComponentCSS/diceStyle.css';
import DiceSides from './DiceSides';
export default function Dice3D({front_face, id, clicked, setClicked}) {
    const face_class = ["null", "show-front", "show-top", "show-bottom", "show-right", "show-left", "show-back"]
    const [face, setFace] = useState(1)
    // console.log(front_face, id);

    useEffect(()=>{
        let angle = 0;
        const rotation_times = 5;
        if(clicked){
            function rotateDice() {
                if(document.getElementById(id))
                document.getElementById(id).style=`transform: translateZ(-20px) rotateY(${angle}deg) rotateX(${angle}deg);`;
                let shadow = document.getElementById('shadow-'+id);
                if(shadow.hasAttribute('style'))
                    shadow.removeAttribute('style');
                else
                    shadow.setAttribute('style', `transform: scale(1.1) rotateX(100deg) translateY(-60px);`);
            }
            const animationObj = setInterval(()=>{
                rotateDice();
                angle+=90;
                if(angle > 90*rotation_times) {
                    clearInterval(animationObj)
                    if(document.getElementById(id))
                    document.getElementById(id).style = "";
                    setFace(front_face);
                    setClicked(false)
                }
            }, 100)
        }
        
    }, [front_face, clicked])


    return (
        <>
            <div className='scene m-1'>
                <div className={`cube ${face_class[face]} dice`} id={id}>
                    <div className='cube_face cube_face--front'><DiceSides side={1} /></div>        
                    <div className='cube_face cube_face--back'><DiceSides side={6} /></div>        
                    <div className='cube_face cube_face--right'><DiceSides side={4} /></div>        
                    <div className='cube_face cube_face--left'><DiceSides side={5} /></div>        
                    <div className='cube_face cube_face--top'><DiceSides side={2} /></div>        
                    <div className='cube_face cube_face--bottom'><DiceSides side={3} /></div>        
                </div>
                <div className='shadow blur-md' id={`shadow-${id}`}></div>
            </div>
        </>
    )
}

/**
 * f>r 1>4
 * r>b  1>3
 * b>l
 * l>f
 * f>bo
 * bo>b
 * b>t
 * t>f
 * 
 */
