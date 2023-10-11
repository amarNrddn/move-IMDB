import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MMylayout from '../components/MMylayout'
import Navbar from '../components/MNavbar/Navbar'
import RouteNewMove from './RouteNewMove'
import RouteTvSeries from './RouteTvSeries'
import RouteMove from './RouteMove'

const MAppRoute = () => {
    return (
        <Routes>
            <Route
                path='/*'
                element={
                    <>
                        <Navbar />
                        <MMylayout />
                    </>
                }
            >
                <Route path='*' element={<RouteNewMove />} />
                <Route path='tvSeries/*' element={<RouteTvSeries />} />
                <Route path='move/*' element={<RouteMove />} />
            </Route>
        </Routes >
    )
}

export default MAppRoute