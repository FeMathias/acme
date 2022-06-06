import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import './productinfo.css'
import {AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import Head from '../../Head'
import { DataContext } from '../../DataContext'


const ProductInfo = () => {
  const [cart, setCart, favs, setFavs, toggleStar, setToggleStar] = useContext(DataContext)

  const { id } = useParams()
  let infos = Data
  
  function addToCart() {
    setCart( arr => [...arr, {
      nome: infos[id-2].nomeCompleto,
      valor: infos[id-2].valor,
      id: infos[id-2].id
    }])
  }
  function setTog1() {
    setToggleStar(false)
  }
  function setTog2() {
    setToggleStar(true)
  }
   function addFav()  {
     setFavs(arr => [...arr, {
       nome: infos[id-2].nomeCompleto,
       valor: infos[id-2].valor,
       id: infos[id-2].id
     }])
    }

  function favManage() {
    if(toggleStar = true)  {
      setFavs(arr => [...arr, {
        nome: infos[id-2].nomeCompleto,
        valor: infos[id-2].valor,
        id: infos[id-2].id
      }])
     } else if (toggleStar = false ) {
      favs.splice(id - 2, 1)
    }
  }

   console.log(favs)
   console.log(cart)

  return (
    <div className='product__container'>
      <div className='product__img'>
        <div className='heart__container' onClick={addFav}>
          <div className='heart'> {toggleStar
            ? <span><AiFillHeart size={45} onChange={addFav} onClick={() => {setTog1(); favManage()}} /></span>
            : <span><AiOutlineHeart size={45} onClick={() => {setTog2()}} /></span>}</div>    
        </div>
        <img src={`https://picsum.photos/id/${infos[id - 2].id*12}/500/350`} alt='id'/>
      </div>
      <div className='product__info'>
        <Head title={`ACME | ${infos[id - 2].nomeCompleto}`} />
        <h1>{infos[id - 2].nomeCompleto}</h1>
        <h3><AiFillStar size={15}/> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiOutlineStar size={15} /> <span>{Math.floor(Math.random()*1000)} avaliações</span></h3>
        
        
        <h2>R${infos[id - 2].valor},00</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aspernatur veritatis fugiat velit. Laudantium consectetur excepturi veritatis totam, laboriosam voluptatibus amet placeat.</p>
        <button onClick={addToCart}>ADICIONE AO CARRINHO <AiOutlineShoppingCart size={25}/></button>
      </div>
    </div>
  )
}

export default ProductInfo