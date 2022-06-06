import React, { useState } from 'react'
import './searchbar.css'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState()

  function handleChange(event) {
    setSearchBar(event.target.value)
  }

  console.log(searchBar)

  return (
    <div className='searchbar__container'>
      <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
      <button className='searchbar__button'> <BsSearch /></button>
    </div>
  )
}

export default SearchBar