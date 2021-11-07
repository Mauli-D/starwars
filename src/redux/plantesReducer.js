import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        setPlanetsData: (state, action) => { state.items = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setPlanetsData } = planetsSlice.actions

export default planetsSlice.reducer