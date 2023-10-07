import React, { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { config } from '../../config'
import axios from 'axios'

const Episode = ({ name, index }) => {
    const { id } = useParams()
    const [episodes, setEpisodes] = useState([])

    const getDetailEpisode = async () => {
        try {
            const res = await axios.get(`${config.api_base_url}/tv/${id}/season/${index}?language=en-US`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
                }
            })
            setEpisodes(res.data.episodes)
        } catch (error) {

        }
    }

    useEffect(() => {
        getDetailEpisode()
    }, [])

    return (
        <div className="w-full px-4 pt-3">
            <div className="w-full max-w-md rounded-2xl bg-black border-[1px] border-white p-2">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-black px-4 py-2 text-left text-sm font-medium text-slate-300 hover:bg-[#1f2937] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>{name}</span>
                                <MdKeyboardArrowUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-slate-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                {episodes.map((episode) => {
                                    return (
                                        <div key={episode.id}>
                                            <p className='truncate mb-1 cursor-pointer'>Episode {episode.episode_number}</p>
                                        </div>
                                    )
                                })}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default Episode