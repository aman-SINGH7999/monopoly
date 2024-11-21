import React, { createContext, useState } from 'react'

export const myContext = createContext()

export default function Context({children}) {
    const [turn, setTurn] = useState(0);
    const [diceClicked, setDiceClicked] = useState(false);
    const [faceValue, setFaceValue] = useState([1,2]);


  return (
    <myContext.Provider value={{turn, setTurn, diceClicked, setDiceClicked, faceValue, setFaceValue}} >
        {children}
    </myContext.Provider>
  )
}
