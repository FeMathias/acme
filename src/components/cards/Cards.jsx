import React, {useState, useContext} from 'react'
import { AiOutlineStar, AiFillStar, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './cards.css'
import { NavLink } from 'react-router-dom'
import Data from '../../Data'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'

export default function Cards(props) {
  const [toggleStar, setToggleStar] = useState(false)
  const [favs, setFavs, toggleHeart, setToggleHeart] = useContext(DataContext)
  const { id } = useParams()

  function addToFav() {
    setFavs((arr) => {
      const newFavs = [...arr];
      const existingItem = newFavs.find((i) => i.id === props[id-2].id);
      if (existingItem) {
        console.log('Este item já está nos favoritos');
      } else {
        newFavs.push({
          nome: props[id-2].nomeCompleto,
          value: props[id-2].valor,
          id: props[id-2].id,
          quantity: 1,
        });
      }
      return newFavs;
    });
  } 

  return (
    <div className='card__container'>
      <NavLink to={`produto/${props.id}`} >
      <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='card' />
      </NavLink>
      {toggleStar
          ? <span><AiFillHeart size={35} onClick={() => setToggleStar(false)} /></span>
          : <span><AiOutlineHeart size={35} onClick={() => {setToggleStar(true);}} /></span>}
      <div className='card__container-data'>
        <h1>{props.nomeCompleto}</h1>
        <p>R${props.valor},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}
