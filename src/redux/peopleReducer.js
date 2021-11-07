import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeopleData: (state, action) => { state.items = action.payload }
    },
})

// Action creators are generated for each case reducer function
export const { setPeopleData } = peopleSlice.actions

export default peopleSlice.reducer