
import React from 'react'
import { useContext } from 'react'
import { Contex } from '../../utils/fetch'

const MMove = () => {
  const { move } = useContext(Contex)
  console.log(move)
  
  return (
    <div className='pt-[5rem]'>
      <h1 className='text-black'>afsdasdas</h1>
    </div>
  )
}

export default MMove