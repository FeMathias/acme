import React from 'react'
import './productinfo.css'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductInfo = (props) => {
  return (
    <div className='product__container'>
      <div className='product__img'>
        <img src='https://picsum.photos/500/350' alt='id'/>
      </div>
      <div className='product__info'>
        <h1>Product Name</h1>
        <h3><AiFillStar size={15}/> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiOutlineStar size={15} /> <span> 462 avaliações</span></h3>
        <h2>R$900,00</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aspernatur veritatis fugiat velit. Laudantium consectetur excepturi veritatis totam, laboriosam voluptatibus amet placeat, illo quos cum omnis a fugit magnam.</p>
        <button>ADICIONE AO CARRINHO <AiOutlineShoppingCart size={25}/></button>
      </div>
    </div>
  )
}

export default ProductInfo