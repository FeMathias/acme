import React from 'react'
import Data from '../../Data'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

const Pesquisa = () => {
  const [search, setSearch] = useState('')
  const lista = Data 
  function handleChange(event) {
    setSearch(event.target.value)
  }
  
  var newData = lista.filter(function (el) {
    return el.nomeCompleto.includes(search)
  })

  return (
    <div className='searchbar__container'>
              
    <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
    <NavLink to='pesquisa'><button className='searchbar__button'> <BsSearch /></button></NavLink>

  </div>
  )
}

export default Pesquisa