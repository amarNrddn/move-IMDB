import React, { useState } from 'react'
import { useContext } from 'react'
import { Contex } from '../../utils/fetch'

const MImage = () => {
    const {newFilm} = useContext(Contex)
    const [isLoading, setIsLoading] = useState(false)
  return (
    <div></div>
  )
}

export default MImage