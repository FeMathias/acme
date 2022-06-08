import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'
import Data from '../../Data'

export function FavoritosC(props) {
  const [favs, setFavs] = useContext(DataContext)

  const removeFav = (i) => {
    console.log(`Você está tentando retirar o item ${props.index}, de nome "${props.nomeCompleto}" da array`, favs)
    setFavs([
        ...favs.splice(i, 1),
    ])
  }

  return (
    <div className='card__container'>
     
        <div className='close-button' onClick={() => removeFav(props.index+1)}>X</div>

      <NavLink to={`../produto/${props.id}`}>
      <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='card' />
      </NavLink>
      <div className='card__container-data'>
        <h1>{props.nomeCompleto}</h1>
        <p>R${props.valor},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}

