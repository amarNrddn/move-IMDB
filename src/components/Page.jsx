import React from 'react'
import { Contex } from '../utils/fetch'
import { useContext } from 'react'

const Page = () => {
    const { images } = useContext(Contex)
    return (
        <div>
            {images.map((item, i) => {
                return (
                    <div key={i}>
                        <div className="w-[50%] h-[50%]">
                            <img className='object-cover' src={item.url} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Page