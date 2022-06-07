import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { createSearchParams, NavLink } from 'react-router-dom'
import {FavoritosC} from './FavoritosC'
import { DataContext } from '../../DataContext'
import Head from '../../Head'

export default function Favoritos(props) {
  const [toggleStar, setToggleStar] = useState(false)
  const [cart, setCart, favs, setFavs] = useContext(DataContext)
  

  const cartLine = favs.map(item => {
    return (
      <FavoritosC 
        key = {item.id}
        id = {item.id}
        img = {item.img}
        firstName = {item.firstName}
        secondName = {item.secondName}
        nomeCompleto = {item.nome}
        valor = {item.value}
        favorite = {item.isFavorite}
      />
    )
  })

  return (
    <div className='cards__container'>
      <Head title={`ACME | Favoritos`} />
      {cartLine}
      </div>
  ) 
}

