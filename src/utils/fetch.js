import axios from "axios";
import React from "react";
import { useEffect, useState, createContext } from "react";

const Contex = createContext(null)

const Provider = ({ children }) => {
    const [images, setImages] = useState([])

    const getImage = async () => {
        const res = await axios.get("https://imdb8.p.rapidapi.com/actors/get-all-images", {
            params: {
                nconst: 'nm0001667'
            },
            headers: {
                'X-RapidAPI-Key': 'ef60c984cdmshe80975688cf5e30p1cc846jsnf15cca5d6094',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
        })
        setImages(res.data.resource.images)
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <Contex.Provider value={{ images }}>
            {children}
        </Contex.Provider>
    )
}

export { Contex, Provider }