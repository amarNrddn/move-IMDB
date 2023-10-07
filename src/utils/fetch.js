import axios from "axios";
import React from "react";
import { useEffect, useState, createContext } from "react";
import { config } from "../config";

const Contex = createContext(null)

const Provider = ({ children }) => {
    const [trending, setTrending] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    const [move, setMove] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getTrending = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`${config.api_base_url}/trending/all/day`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
                }
            })

            setTrending(res.data.results)
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    const getTvseriesPopuler = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`${config.api_base_url}/tv/popular?language=en-US&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
                }
            })
            setTvSeries(res.data.results)
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        } catch (error) {

        }
    }

    const getMove = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`${config.api_base_url}/movie/popular?language=en-US&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
                }
            })

            setMove(res.data.results)
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        } catch (error) {

        }
    }

    useEffect(() => {
        getTrending()
        getTvseriesPopuler()
        getMove()
    }, [])

    return (
        <Contex.Provider value={{ trending, tvSeries, move, isLoading, }}>
            {children}
        </Contex.Provider>
    )
}

export { Contex, Provider } 