import React, { useEffect, useState } from 'react'
import MSkeleton from '../../components/MSkeleton/MSkeleton'
import { config } from '../../config'
import axios from 'axios'

const MNew = () => {
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
      // console.log(res.data.results)
      setTimeout(() => {
        setIsLoading(false)

      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTrending()
  }, [])

  return (
    <div className='w-[100%] bg-dark text-white px-5 pt-[5rem] grid grid-cols-5 gap-2'>
      {trending.map((item, i) => {
        const vote = item.vote_average + '%'
        console.log(vote)
        return (
          <div key={i} className=" ">
            {isLoading ? (
              <MSkeleton />
            ) : (
              <div className="border border-neutral-800 shadow max-w-[260px] pb-3 relative rounded-md">
                <div className="w-full rounded-md">
                  <img
                    src={`${config.api_path_img}/${item.poster_path}`}
                    alt="error"
                    className=' '
                  />
                </div>
                {/* style={{width: vote}} */}
                <div className="w-full mt-2 pl-2 text white">
                  <p className="max-w-[180px] truncate  text-[11px] rounded-sm">{item.original_title}</p>
                  <div className="h-[5px] w-[10%] bg-slate-50">
                    <div className="h-[5px]  bg-slate-500 " style={{width: vote}} ></div>
                  </div>
                  <p className="max-w-[150px] mb-1 mt-1 truncate text-[11px]  rounded-sm">{item.vote_average}</p>
                  <p className="max-w-[150px] mb-1  truncate rounded-sm text-[11px] ">{item.first_air_date}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default MNew