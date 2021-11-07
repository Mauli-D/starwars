import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from "./redux/peopleReducer"
import moviesReducer from './redux/moviesReducer'
import planetsReducer from './redux/plantesReducer'

const store = configureStore({
  reducer: {
    people: peopleReducer,
    movies: moviesReducer,
    planets: planetsReducer
  },
})

export default store