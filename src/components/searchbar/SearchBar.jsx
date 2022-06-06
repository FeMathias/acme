import React, { useState, useContext } from 'react'
import './searchbar.css'
import { BsSearch } from 'react-icons/bs'
import { DataContext } from '../../DataContext'
import Data from '../../Data'

const SearchBar = () => {
  const [search, setSearch] = useState()
  const [searchArray, setSearchArray] = useState([])

  function handleChange(event) {
    setSearch(event.target.value)
  }

  console.log(search)

  return (
    <div className='searchbar__container'>
      <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
      <button className='searchbar__button'> <BsSearch /></button>
    </div>
  )
}

export default SearchBar