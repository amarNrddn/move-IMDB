import React, { useEffect, useState } from 'react'
import MSkeleton from '../../components/MSkeleton/MSkeleton'
import { config } from '../../config'
import { Contex } from '../../utils/fetch'
import { useContext } from 'react'

const MNew = () => {
  const { trending, isLoading } = useContext(Contex)
  // console.log(isLoading)
  return (
    <div className='w-[100%] bg-dark text-white px-5 pt-[5rem] grid grid-cols-5 gap-2  '>
      {trending.map((item, i) => {
        return (
          <div key={i} className=" ">
              <div className="border border-neutral-800 shadow max-w-[260px] pb-3 relative rounded-md">
                <div className="w-full rounded-md">
                  <img
                    src={`${config.api_path_img}/${item.poster_path}`}
                    alt="error"
                    className=' '
                  />
                </div>
                <div className="">

                </div>
                <div className="w-full mt-2 pl-2">
                  <div className="max-w-[180px] h-[10px]  rounded-sm">{item.name}</div>
                  <div className="max-w-[150px] mb-1 mt-1 h-[10px]  rounded-sm"></div>
                  <div className="max-w-[150px] mb-1 h-[10px]  rounded-sm"></div>
                  <div className="max-w-[100px] h-[10px]  rounded-sm"></div>
                </div>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default MNew