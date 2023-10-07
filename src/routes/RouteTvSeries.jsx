import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MTvSeries from '../pages/MTvSeries/MTvSeries'
import DetailSeries from '../pages/MTvSeries/DetailSeries'
import Episode from '../pages/MTvSeries/Episode'

const RouteTvSeries = () => {
  return (
    <Routes>
        <Route path='/' element={<MTvSeries/>} />
        <Route path='/:id' element={<DetailSeries/>} />
        <Route path='/:id/:episode' element={<Episode/>} />
    </Routes>
  )
}

export default RouteTvSeries