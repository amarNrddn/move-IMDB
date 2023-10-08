import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { avatar } from '../../assets'

const Navbar = () => {
  const navigate = useNavigate()
  const [inputSearch, setInputSearch] = useState({ name: 'searchUser' })

  const onChangeSearch = (e) => {
    setInputSearch({ ...inputSearch, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    if (e.key === 'Enter') {
      console.log(inputSearch)
    } 
    console.log(inputSearch) 
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
          name='searchUser'
          onChange={onChangeSearch}
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