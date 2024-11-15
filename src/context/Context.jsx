import React, { createContext, useState } from 'react'

export const myContext = createContext()

export default function Context({children}) {
    const [turn, setTurn] = useState(false);

  return (
    <myContext.Provider value={{turn, setTurn}} >
        {children}
    </myContext.Provider>
  )
}
