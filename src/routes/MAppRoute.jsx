import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MMylayout from '../components/MMylayout'
import Navbar from '../components/MNavbar/Navbar'
import MTvShow from '../pages/MRTvShow/MTvShow'
import RouteNewMovie from './RouteNewMove'
import MNew from '../pages/MNew/MNew'


const MAppRoute = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Navbar />
                        <MMylayout />
                    </>
                }
            >
                <Route path='/' element={<RouteNewMovie />} />
                <Route path ='tvShow/*' element={<MTvShow/>} />
                <Route path='*' element={<h1 className='pt-[5rem]'>Page not fonty</h1>} />
            </Route>
        </Routes >
    )
}

export default MAppRoute