import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { config } from '../../config'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { BsFillStarFill } from 'react-icons/bs'

const DetailMove = () => {
  const { id } = useParams()
  const [move, setDetailMove] = useState([])
  const [genres, setGenres] = useState([])
  const [videos, setVideos] = useState([])

  const getDetailMove = async () => {
    try {
      const res = await axios.get(`${config.api_base_url}/movie/${id}?language=en-US`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
        }
      })

      const resVideos = await axios.get(`${config.api_base_url}/movie/${id}/videos?language=en-US`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
        }
      })

      setVideos(resVideos)
      console.log(resVideos)
      setDetailMove(res.data)
      setGenres(res.data.genres)
    } catch (error) {

    }
  }

  useEffect(() => {
    getDetailMove()
  }, [])
  return (
    <div className=' w-full  pt-[5rem] bg-dark text-white px-5 pb-5'>
      <div className="w-full h-[450px]">
        <img
          className='w-full h-full object-cover rounded-sm'
          src={`${config.api_path_img}/${move.backdrop_path}`}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <AiOutlinePlayCircle className='text-[70px] font-bold cursor-pointer' />
        </div>
      </div>
      <div className="mt-3 flex w-full  items-center">
        <h1 className='text-4xl mr-[5rem]'>{move.original_title}</h1>
        <h2 className='text-2xl text-slate-500 flex items-center gap-1'>
          {parseFloat(move.vote_average).toFixed(1)}
          <p><BsFillStarFill className='text-xl text-center mt-[-3px] text-orange-500' /></p>
        </h2>
        <h3 className='text-sm font-semibold text-slate-500 ml-3 gap-2 flex'>TMDB Rating
          <p>{move.vote_count}</p>
        </h3>
      </div>
      <div className="flex gap-2">
        {genres.map((genre, i) => {
          return (
            <div key={i} className="">
              <p className='text-slate-500'>{genre.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DetailMove