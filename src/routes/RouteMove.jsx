import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MMove from '../pages/MMove/MMove'
import DetailMove from '../pages/MMove/DetailMove'

const RouteMove = () => {
  return (
    <Routes>
        <Route path='/' element={<MMove/>} />
        <Route path='/:id' element={<DetailMove/>} />
    </Routes>
  )
}

export default RouteMove