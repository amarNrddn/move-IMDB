import axios from "axios";
import React from "react";
import { useEffect, useState, createContext } from "react";

const Contex = createContext(null)

const Provider = ({ children }) => {
    const [newFilm, setNewFilm] = useState([])
    // const [isLoading, setIsLoading] = useState(false)

    const getNewFilm = async () => {
        // setIsLoading()
        try {
            const res = await axios.get(`https://imdb8.p.rapidapi.com/actors/get-all-news`, {
                params: {
                    nconst: 'nm0001667'
                },
                headers: {
                    'X-RapidAPI-Key': 'd0f5ad54e1msh353ad61774af30dp122ea6jsnd9a4dde0cdf5',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            })

            setNewFilm(res)
        } catch (error) {

        }
    }

    useEffect(() => {
        getNewFilm()
    }, [])

    return (
        <Contex.Provider value={{ newFilm }}>
            {children}
        </Contex.Provider>
    )
}

export { Contex, Provider }