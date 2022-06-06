import React, {useState} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { NavLink } from 'react-router-dom'

export function FavoritosC(props) {
  const [toggleStar, setToggleStar] = useState(false)

  return (
    <div className='card__container'>
      <NavLink to={`produto/${props.id}`} >
      <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='card' />
      </NavLink>
      {toggleStar
          ? <span><AiFillStar onClick={() => setToggleStar(false)} /></span>
          : <span><AiOutlineStar onClick={() => setToggleStar(true)} /></span>}
      <div className='card__container-data'>
        <h1>{props.nomeCompleto}</h1>
        <p>R${props.valor},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}

