import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import './productinfo.css'
import {AiOutlineHeart, AiFillHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import Head from '../../Head'
import { DataContext } from '../../DataContext'


const ProductInfo = (props) => {
  const {favoritos, carrinho} = useContext(DataContext);
  const [favs, setFavs] = favoritos;
  const [cart, setCart] = carrinho;
  const [toggleStar, setToggleStar] = React.useState(false)

  const { id } = useParams()
  let infos = Data

  function addToCart() {
    const item = infos[id - 2]
    setCart((arr) => {
      const newCart = [...arr];
      const existingItem = newCart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        newCart.push({
          nome: infos[id-2].nomeCompleto,
          value: infos[id-2].valor,
          id: infos[id-2].id,
          quantity: 1,
          key: infos[id-2].key
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

  function deleteTask(pos) {
    setFavs(oldArray => oldArray.filter((item, index) => index !== pos));
  }

  function addToFav() {
    setFavs((arrb) => {
      const newFavs = [...arrb];
      const existingItem = newFavs.find((i) => i.id === infos[id-2].id);
      if (existingItem) {
        console.log('Este item já está nos favoritos');
      } else {
        newFavs.push({
          nome: infos[id-2].nomeCompleto,
          value: infos[id-2].valor,
          id: infos[id-2].id,
          quantity: 1,
          key: infos[id-2].key
        });
      }
      return newFavs;
    });
  } 
   console.log(favs)
   console.log(cart)

  return (
    <div className='product__container'>

      <div className='product__img'>
        <div className='heart__container'>
          <div className='heart'> {toggleStar
            ? <span><AiFillHeart size={45} onClick={() => {setTog1(); deleteTask(props.index)}} /></span>
            : <span><AiOutlineHeart size={45} onClick={() => {setTog2();  addToFav()}} /></span>}</div>    
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