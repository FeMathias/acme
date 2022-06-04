import React from 'react'
import './productinfo.css'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'

const ProductInfo = (props) => {
  function addToCart() {
    return console.log('Adicionado ao carrinho!')
  }
  
  return (
    <div className='product__container'>
      <div className='product__img'>
        <img src={`https://picsum.photos/id/${props.id*12}/500/350`} alt='id'/>
      </div>
      <div className='product__info'>
     
        <h1>{props.nomeCompleto}</h1>
        <h3><AiFillStar size={15}/> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiOutlineStar size={15} /> <span> 462 avaliações</span></h3>
        
        
        <h2>R${props.valor},00</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aspernatur veritatis fugiat velit. Laudantium consectetur excepturi veritatis totam, laboriosam voluptatibus amet placeat, illo quos cum omnis a fugit magnam.</p>
        <button onClick={addToCart()}>ADICIONE AO CARRINHO <AiOutlineShoppingCart size={25}/></button>
      </div>
    </div>
  )
}

export default ProductInfo