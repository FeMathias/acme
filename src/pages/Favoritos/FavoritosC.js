import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'
import Data from '../../Data'

export function FavoritosC(props) {
  const [favs, setFavs, indexFavs] = useContext(DataContext)
  let infos = Data
  
  const removeFavs = (index) => {
    setFavs([
        ...favs.slice(0, index),
        ...favs.slice(index+1)
    ])
    console.log(`Você removeu ${props.nomeCompleto} dos favoritos. Veja o resto dos favoritos:`, favs)
  }

  return (
    <div className='card__container'>
     
        <div className='close-button' onClick={() => removeFavs(props.id-2)}>X</div>

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

