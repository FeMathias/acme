import React, {useState, useContext, useEffect} from 'react'
import './cart.css'
import { DataContext } from '../../DataContext'
import Data from '../../Data'
import { useParams, NavLink } from 'react-router-dom'

export const CartElement = (props) => {
  const {favoritos, carrinho} = useContext(DataContext);
  const [favs, setFavs] = favoritos;
  const [cart, setCart] = carrinho;
  const { id } = useParams()
  let infos = Data

  function cartAdd() {
    setCart((arr) => {
      const newCart = [...arr];
      const existingItem = newCart.find((i) => i.id === props.id);
      if (existingItem) {
        existingItem.quantity++;
      }
      return newCart.sort((a, b) => {
        return a.key - b.key
      });
    });
  }

  function cartLess() {
    setCart((arr) => {
      const newCart = [...arr];
      const existingItem = newCart.find((i) => i.id === props.id);
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } 
      return newCart;
    });
  }
  
    function deleteTask(pos) {
      setCart(oldArray => oldArray.filter((item, index) => index !== pos));
    }

    const cartRemove = (i) => {
      setCart()
    }
  
  let total = props.valor * props.quantity

  return (
  <div className='cart__productOverview'>
    <NavLink to={`../produto/${props.id}`}><img className='img-cart-ov' src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='produto'/></NavLink>
    <div className='cart__prouctOverview-general'>
      <div className='cart__productOverview-name'>
        <h2>{props.nomeCompleto}</h2>
        <h3>#{props.id}</h3>
      </div>
      <div className='cart__productOverview-price'>
        <h2>Preço</h2>
        <h3>R${props.valor},00</h3>
      </div>
      <div className='cart__productOverview-qtd'>
        <h2>Quantidade</h2>
        <div className='cart__productOverview-qtd-control'>
          <h3>{props.quantity}</h3>
          <button onClick={cartLess}>-</button>
          <button onClick={cartAdd}>+</button>
        </div>
      </div>
      <div className='cart__productOverview-total'>
        <h2>Total</h2>
        <h2>R${total},00</h2>
      </div>
    </div>
    <div className='delete__item' onClick={() => {deleteTask(props.index)}}>
      X
    </div>
  </div>
)}