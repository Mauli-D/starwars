import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home"
import loading from './loading.gif'
import './App.css';
const People = React.lazy(() => import('./Components/PeopleName'))
const Movies = React.lazy(() => import('./Components/MoviesName'));
const Planets = React.lazy(() => import('./Components/PlanetsName'));
const Details = React.lazy(() => import('./Components/Details'));

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<img src={loading} alt="loading..."></img>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/:bucketId/:itemId" element={<Details />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default App;