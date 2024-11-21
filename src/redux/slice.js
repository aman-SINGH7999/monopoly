import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    players : [],
}

export const monopolySlice = createSlice({
    name : "monopoly",
    initialState,
    reducers : {
        addPlayers : (state, actions)=>{
            state.players = actions.payload;
        },

    }
})

export const { addPlayers } = monopolySlice.actions

export default monopolySlice.reducer