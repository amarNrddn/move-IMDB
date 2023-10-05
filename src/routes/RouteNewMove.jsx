import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/MNew/Detail'
import MNew from '../pages/MNew/MNew'

const RouteNewMovie = () => {
  return (
    <Routes>
      <Route path='/' element={<MNew />} />
      <Route path='Detail/:id' element={<Detail />} />
    </Routes>
  )
}

export default RouteNewMovie