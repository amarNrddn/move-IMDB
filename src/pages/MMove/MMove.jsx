import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../config'

const MMove = () => {
  const [move, setMove] = useState([])

  const getMove = async () => {
    const res = await axios.get(`${config.api_base_url}/trending/movie/day?language=en-US`, {
      headers: { accept: 'application/json' }
    })
    // console.log(res)
  }

  useEffect(() => {
    getMove()
  }, [])
  return (
    <div>

    </div>
  )
}

export default MMove