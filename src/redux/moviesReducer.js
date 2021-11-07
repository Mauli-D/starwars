import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMoviesData: (state, action) => { state.items = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setMoviesData } = moviesSlice.actions

export default moviesSlice.reducer