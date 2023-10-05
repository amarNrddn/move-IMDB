import axios from "axios";
import React from "react";
import { useEffect, useState, createContext } from "react";
import { config } from "../config";
const Contex = createContext(null)

const Provider = ({ children }) => {
    const [trending, setTrending] = useState([])
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
            }, 200)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrending()
    }, [])

    return (
        <Contex.Provider value={{ trending, isLoading }}>
            {children}
        </Contex.Provider>
    )
}

export { Contex, Provider }