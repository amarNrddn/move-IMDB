import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { avatar } from '../../assets'
import { config } from '../../config'
import axios from 'axios'
import { useContext } from 'react'
import { Contex } from '../../utils/fetch'

const Navbar = () => {
  const { setMove, setTvSeries, setTrending } = useContext(Contex)
  const navigate = useNavigate()
  const [inputSearch, setInputSearch] = useState('')

  const hendleOnchange = (e) => {
    setInputSearch({ ...inputSearch, [e.target.name]: e.target.value })
  }

  const searchMove = async () => {
    try {
      const res = await axios.get(`${config.api_base_url}/search/multi?query=${inputSearch.name}&include_adult=false&language=en-US&page=1`, {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGE4NTE2MThkNmVkNDg2ZTg2YWY4NGZjNjU5MTk0MCIsInN1YiI6IjY1MGYwZGI0ZThkMGI0MDBjYTg1YTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.65natjhrPcktFWtX6o7M6psQCKY6S6MGRaqKaBx4QO4'
        }
      })

      setTrending(res.data.results)
      setTvSeries(res.data.results)
      setMove(res.data.results)
      console.log(res.data.results)
    } catch (error) {

    }
  }

  const onSubmit = async (e) => {
    if (e.key > 3 || e.key === 'Enter') {
      searchMove()
    }
  }

  return (
    <nav className='w-full flex justify-between bg-dark py-3 px-5 fixed z-50 '>
      <div className="flex items-center">
        <h1 className='font-bold text-rose-500 mr-4 cursor-pointer text-[30px]'>MARZKYYMOVE</h1>
        <ul className='text-white flex gap-3 cursor-pointer'>
          <li
            className='hover:text-slate-500 hover:ease-out duration-300'
            onClick={() => navigate('/')} >
            Trending
          </li>
          <li
            className='hover:text-slate-500 hover:ease-out duration-300'
            onClick={() => navigate('/tvSeries')}>
            Tv Series
          </li>
          <li
            className='hover:text-slate-500 hover:ease-out duration-300'
            onClick={() => navigate('/move')}
          >
            Move
          </li>
          <li
            className='hover:text-slate-500 hover:ease-out duration-300'
          >
            Genre
          </li>
        </ul>
      </div>

      <div className="flex gap-3 cursor-pointer text-white text-[20px] font-bold items-center">
        <input
          name='name'
          onChange={hendleOnchange}
          onKeyPress={onSubmit}
          type="text"
          placeholder='search...'
          className='outline-none rounded-sm text-[14px] pl-2 py-1 font-normal bg-dark opacity-1 border-[1px] border-white'
        />

        <AiOutlineSearch
          className='font-bold text-[25px]'
          onClick={onSubmit}
        />
        <IoIosNotificationsOutline className='font-bold text-[25px]' />
        <div className="w-[40px] h-[40px]">
          <img className='rounded-lg' src={avatar} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar