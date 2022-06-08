import React, { useState, useContext, useEffect } from 'react'
import './searchbar.css'
import { BsSearch } from 'react-icons/bs'
import { DataContext } from '../../DataContext'
import Data from '../../Data'
import {NavLink} from 'react-router-dom'

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const lista = Data 
  const [produtos, setProdutos] = useState(lista)

  function handleChange(event) {
    setSearch(event.target.value)
  }
  
  var newData = lista.filter(function (el) {
    return el.nomeCompleto.includes(search)
  })

  function pressEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault();

    }
  }

  console.log('seu texto é',search, newData)

  return (
    <div className='searchbar__container'>
      <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
      <NavLink to='pesquisa' onKeyDown={(event) => {if(event.keyCode === 13){}}}><button className='searchbar__button'> <BsSearch/></button></NavLink>

    </div>
  )
}

export default SearchBar