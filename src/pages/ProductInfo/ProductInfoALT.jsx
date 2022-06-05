import React from 'react'
import { useParams } from 'react-router-dom'
import './productinfo.css'
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import Head from '../../Head'

const ProductInfo = (props) => {
  function addToCart() {
    return console.log(`Você adicionou o produto ${infos[id - 2].nomeCompleto} ao carrinho`)
  }

  const { id } = useParams()
  let infos = Data
  console.log(infos[id])

  
  return (
    <div className='product__container'>
      <div className='product__img'>
        <img src={`https://picsum.photos/id/${infos[id - 2].id*12}/500/350`} alt='id'/>
      </div>
      <div className='product__info'>
        <Head title={`ACME | ${infos[id - 2].nomeCompleto}`} />
        <h1>{infos[id - 2].nomeCompleto}</h1>
        <h3><AiFillStar size={15}/> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiOutlineStar size={15} /> <span> 462 avaliações</span></h3>
        
        
        <h2>R${infos[id - 2].valor},00</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aspernatur veritatis fugiat velit. Laudantium consectetur excepturi veritatis totam, laboriosam voluptatibus amet placeat.</p>
        <button onClick={addToCart}>ADICIONE AO CARRINHO <AiOutlineShoppingCart size={25}/></button>
      </div>
    </div>
  )
}

export default ProductInfo