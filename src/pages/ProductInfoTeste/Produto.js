import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'

import {AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import Head from '../../Head'
import { DataContext } from '../../DataContext'

const Produto = (props) => {
  const [cart, setCart] = useContext(DataContext)
  const [favs, setFavs] = useContext(DataContext)
  const [toggleStar, setToggleStar] = React.useState(false)

  const { id } = useParams()


  function addToCart() {
    const item = props[id - 2]
    setCart((arr) => {
      const newCart = [...arr];
      const existingItem = newCart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        newCart.push({
          nome: props.nomeCompleto,
          value: props.valor,
          id: props.id,
          quantity: 1,
          key: props.key
        });
      }
      return newCart.sort((a, b) => {
        return a.key - b.key
      });
    });
  }
  
  function setTog1() {
    setToggleStar(false)
  }
  function setTog2() {
    setToggleStar(true)
  }

  function addToFav2() {
    const newFavs = [...favs]
    const existingItem = newFavs.find((i) => i.id === props.id);
    if(existingItem) {
      setFavs((arr) => {
        
      })
    }
  }

  function addToFav() {
    setFavs((arr) => {
      const newFavs = [...arr];
      const existingItem = newFavs.find((i) => i.id === props.id);
      if (existingItem) {
        console.log('Este item já está nos favoritos');
      } else {
        newFavs.push({
          nome: props.nomeCompleto,
          value: props.valor,
          id: props.id,
          quantity: 1,
          key: props.key
        });
      }
      return newFavs;
    });
  } 

  return (
    <div className='product__container'>
      <div className='product__img'>
        <div className='heart__container'>
          <div className='heart'> {toggleStar
            ? <span><AiFillHeart size={45} onClick={() => {setTog1(); }} /></span>
            : <span><AiOutlineHeart size={45} onClick={() => {setTog2();  addToFav()}} /></span>}</div>    
        </div>
        <img src={`https://picsum.photos/id/${props.id*12}/500/350`} alt='id'/>
      </div>
      <div className='product__info'>
        <Head title={`ACME | ${props.nomeCompleto}`} />
        <h1>{props.nomeCompleto}</h1>
        <h3><AiFillStar size={15}/> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiFillStar size={15} /> <AiOutlineStar size={15} /> <span>{Math.floor(Math.random()*1000)} avaliações</span></h3>
        
        
        <h2>R${props.valor},00</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aspernatur veritatis fugiat velit. Laudantium consectetur excepturi veritatis totam, laboriosam voluptatibus amet placeat.</p>
        <button onClick={addToCart}>ADICIONE AO CARRINHO <AiOutlineShoppingCart size={25}/></button>
      </div>
    </div>
  )
}

export default Produto