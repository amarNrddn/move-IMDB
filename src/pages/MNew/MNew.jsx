import React, { useEffect, useState } from 'react'
import MSkeleton from '../../components/MSkeleton/MSkeleton'
import axios from 'axios'

const MNew = () => {
  const [newFilm, setNewFilm] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getNewFilm = async () => {
    const res = await axios.get("https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json")
    setNewFilm(res.data)
    console.log(res.data)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  useEffect(() => {
    getNewFilm()
  }, [])

  return (
    <div className='w-[100%] h-[100vh] bg-dark text-white px-5 pt-[5rem] flex flex-wrap '>
      {/* {newFilm.map((item, i) => {
        return (

          <div key={i} className="w-full">
            {isLoading ? (
              <MSkeleton />
            ) : (
              <div className="w-full">
                <div className="border border-neutral-800 shadow max-w-[260px] pb-3 rounded-md">
                  <div className="animate-pulse">
                    <div className="w-full bg-neutral-800 h-[100px] rounded-md">{item.name}</div>
                    <div className="w-full mt-2 pl-2">
                      <div className="max-w-[180px] h-[10px] bg-neutral-800 rounded-sm"></div>
                      <div className="max-w-[150px] mb-1 mt-1 h-[10px] bg-neutral-800 rounded-sm"></div>
                      <div className="max-w-[150px] mb-1 h-[10px] bg-neutral-800 rounded-sm"></div>
                      <div className="max-w-[100px] h-[10px] bg-neutral-800 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })} */}
    </div>
  )
}

export default MNew