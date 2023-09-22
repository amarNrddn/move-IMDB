import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MMylayout from '../components/MMylayout'
import Navbar from '../components/MNavbar/Navbar'
import MNew from '../pages/MNew/MNew'
import MTvShow from '../pages/MRTvShow/MTvShow'


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
                <Route path='/' element={<MNew />} />
                <Route path ='/tvShow' element={<MTvShow/>} />
            </Route>
        </Routes >
    )
}

export default MAppRoute