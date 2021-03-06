import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { createSearchParams, NavLink } from 'react-router-dom'
import {FavoritosC} from './FavoritosC'
import { DataContext } from '../../DataContext'
import Head from '../../Head'

export default function Favoritos(props) {
  const [toggleStar, setToggleStar] = useState(false)
  const {favoritos, carrinho} = useContext(DataContext);
  const [favs, setFavs] = favoritos;
  const [cart, setCart] = carrinho;
  

  const cartLine = favs.map((item, index) => {
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
        index = {index}
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

