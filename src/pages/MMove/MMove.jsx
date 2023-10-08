import React, { useState } from 'react'
import { useContext } from 'react'
import { Contex } from '../../utils/fetch'
import MSkeleton from '../../components/MSkeleton/MSkeleton'
import { Link } from 'react-router-dom'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { CircularProgressbar } from 'react-circular-progressbar'
import { config } from '../../config'

const MMove = () => {
  const { move, isLoading } = useContext(Contex)
  const [customColor] = useState({
    Up: '#16a34a',
    midle: '#facc15',
    low: '#e11d48'
  })

  return (
    <div className='w-[100%] bg-dark text-white px-5 pt-[5rem] grid grid-cols-5 gap-2'>
      {move.map((move, i) => {
        const vote = Math.floor(move.vote_average * 10)
        const percentage = vote;

        const dateString = move.release_date || move.first_air_date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString(undefined, options);

        return (
          <div key={i}>
            {isLoading ? (
              <MSkeleton />
            ) : (
              <div className="border border-neutral-800 shadow max-w-[260px] pb-3 relative rounded-md cursor-pointer flex flex-col overflow-hidden">
                <div className="w-full rounded-md relative overflow-hidden transition ease-in-out  delay-150  hover:opacity-25 hover:scale-110 ">
                  <img
                    src={`${config.api_path_img}/${move.poster_path}`}
                    alt="error"
                    className='rounded-sm '
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 ease-in-out  delay-150">
                    <Link to={`${move.id}`} >
                      <AiOutlinePlayCircle
                        className='text-[60px]'
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-full mt-2 px-2 text white flex ">
                  <div className="w-full">
                    <p className=" truncate text-[16px] text-[#fff] font-bold max-w-[120px] rounded-sm">{move.title || move.name}</p>
                  </div>
                  <div className="w-[40px] h-[40px] absolute right-2 top-[80%] ">
                    <CircularProgressbar
                      className='w-[40px] text-[20px] font-bold h-[40px] '
                      value={percentage}
                      text={`${percentage}%`}
                      styles={{
                        path: {
                          stroke: vote >= 80 ? customColor.Up : customColor.Up && vote <= 60 ? customColor.low : customColor.low && vote <= 50 ? customColor.midle : customColor.midle,
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

export default MMove