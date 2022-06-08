import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './favoritos.css'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'
import Data from '../../Data'

export function FavoritosC(props) {
  const {favoritos, carrinho} = useContext(DataContext);
  const [favs, setFavs] = favoritos;
  const [cart, setCart] = carrinho;

  function deleteTask(pos) {
    setFavs(oldArray => oldArray.filter((item, index) => index !== pos));
  }

  return (
    <div className='card__container'>
     
        <div className='close-button' onClick={() => deleteTask(props.index)}>X</div>

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

