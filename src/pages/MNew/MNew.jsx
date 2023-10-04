import React, { useEffect, useState } from 'react'
import MSkeleton from '../../components/MSkeleton/MSkeleton'
import axios from 'axios'
import 'react-circular-progressbar/dist/styles.css';
import { config } from '../../config'
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiOutlinePlayCircle } from 'react-icons/ai'

const MNew = () => {
  const [trending, setTrending] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [customColor] = useState({
    Up: '#16a34a',
    midle: '#facc15',
    low: '#f43f5e'
  })

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
      }, 0)
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
        const vote = Math.floor(item.vote_average * 10)
        const percentage = vote;

        const dateString = item.release_date || item.first_air_date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString(undefined, options);

        return (
          <div key={i} className=" relative ">
            {isLoading ? (
              <MSkeleton />
            ) : (
              <div className="border border-neutral-800 shadow max-w-[260px] pb-3 relative rounded-md cursor-pointer flex flex-col">
                <div className="w-full rounded-md relative overflow-hidden">
                  <img
                    src={`${config.api_path_img}/${item.poster_path}`}
                    alt="error"
                    className='rounded-sm transition ease-in-out  delay-150  hover:opacity-25 hover:scale-110 '
                  />
                  <div className="w-full h-auto bg-white ">
                    <AiOutlinePlayCircle className='text-[60px] absolute left-0 top-0 right-0 bottom-0 m-auto opacity-0 hover:opacity-100' />
                  </div>
                </div>
                <div className="w-full mt-2 px-2 text white flex ">
                  <div className="w-full">
                    <p className=" truncate text-[16px] text-[#fff] font-bold max-w-[120px] rounded-sm">{item.title || item.name}</p>
                  </div>
                  <div className="w-[40px] h-[40px] absolute right-2 top-[80%] ">
                    <CircularProgressbar
                      className='w-[40px] text-[20px] font-bold h-[40px] '
                      value={percentage}
                      text={`${percentage}%`}
                      styles={{
                        path: {
                          stroke: vote >= 80 ? customColor.Up : customColor.Up || vote <= 70 ? customColor.midle : 'customColor.midle' || vote <= 50 ? customColor.low : 'customColor.low',
                        },
                      }}
                    />
                  </div>
                </div>
                <p className="max-w-[150px] mb-1 px-2  truncate rounded-sm text-[11px] text-slate-500 ">{formattedDate}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default MNew