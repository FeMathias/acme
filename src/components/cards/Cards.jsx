import React, {useState} from 'react'
import { AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './cards.css'

export default function Cards(props) {
  const [toggleStar, setToggleStar] = useState(false)

  return (
    <div className='card__container'>
      <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='card' />
      {toggleStar
          ? <span><AiFillStar onClick={() => setToggleStar(false)} /></span>
          : <span><AiOutlineStar onClick={() => setToggleStar(true)} /></span>}
      <div className='card__container-data'>
        <h1>{props.firstName} {props.secondName}</h1>
        <p>R${props.value},00</p>
      </div>
      <div>
      </div>
    </div>
  )
}

