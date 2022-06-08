import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import { NavLink } from 'react-router-dom'
import Data from '../../Data'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'

export default function CardsSearch(props) {
  const [toggleStar, setToggleStar] = useState(false)
  const [favs, setFavs] = useContext(DataContext)

  function setTog1() {
    setToggleStar(false)
  }
  function setTog2() {
    setToggleStar(true)
  }

  return (
    <div className='card__container'>
      <NavLink to={`../produto/${props.id}`} >
      <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='card' />
      </NavLink>
      {toggleStar
          ? <span><AiFillHeart size={35} onClick={() =>{setTog1();}} /></span>
          : <span><AiOutlineHeart size={35} onClick={() =>{setTog2(); }} /></span>}
      <div className='card__container-data'>
        <h1>{props.nomeCompleto}</h1>
        <p>R${props.valor},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}
