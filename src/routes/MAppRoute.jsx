import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MMylayout from '../components/MMylayout'
import Navbar from '../components/MNavbar/Navbar'
import RouteNewMove from './RouteNewMove'
import RouteTvSeries from './RouteTvSeries'
import MMove from '../pages/MMove/MMove'

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
                <Route path ='tvSeries/*' element={<RouteTvSeries/>} />
                <Route path='move/*' element={<MMove/> }/>
                {/* <Route path='!*' element={<h1 className='pt-[5rem]'>Page not fonty</h1>} /> */}
            </Route>
        </Routes >
    )
}

export default MAppRoute