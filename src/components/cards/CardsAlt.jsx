import React, {useState} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './cards.css'
import { NavLink } from 'react-router-dom'
import Data from '../../Data'
import { useParams } from 'react-router-dom'

export default function CardsAlt(props) {
  const [toggleStar, setToggleStar] = useState(false)
  const { id } = useParams()
  let Favorites = [{}]
  let infos = Data


  
  function favoriteItems() {
    if (toggleStar || setToggleStar === true) {
      return (
        Favorites.push(Data[id]),
        console.log(Favorites)
      )
    } else {
      return (`Você removeu ${props.nomeCompleto} dos favoritos`)
    }
  }

  return (
    <div className='card__container'>
      <NavLink to={`produto/${infos[id - 2].id}`} >
      <img src={`https://picsum.photos/id/${infos[id - 2].id*12}/300/300`} alt='card' />
      </NavLink>
      {toggleStar
          ? <span><AiFillStar onChange={favoriteItems()} onClick={() => setToggleStar(false)} /></span>
          : <span><AiOutlineStar onClick={() => setToggleStar(true)} /></span>}
      <div className='card__container-data'>
        <h1>{infos[id - 2].nomeCompleto}</h1>
        <p>R${infos[id - 2].valor},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}

