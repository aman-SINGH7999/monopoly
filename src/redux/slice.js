import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    players : [],
    value : 0,
}

export const monopolySlice = createSlice({
    name : "monopoly",
    initialState,
    reducers : {
        addPlayers : (state, actions)=>{
            state.players = actions.payload;
        },
        counter : (state)=>{
            state.value += 1;
        },
    }
})

export const { addPlayers, counter } = monopolySlice.actions

export default monopolySlice.reducer