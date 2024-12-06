import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    players : [],
    properties : [],
}

export const monopolySlice = createSlice({
    name : "monopoly",
    initialState,
    reducers : {
        addPlayers : (state, actions)=>{
            state.players = actions.payload;
        },
        addProperties : (state, actions)=>{
            state.properties = actions.payload;
        }
    }
})

export const { addPlayers, addProperties } = monopolySlice.actions

export default monopolySlice.reducer