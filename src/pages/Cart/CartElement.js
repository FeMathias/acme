import React, {useState, useContext} from 'react'
import './cart.css'
import { DataContext } from '../../DataContext'
import Data from '../../Data'
import { useParams } from 'react-router-dom'

export const CartElement = (props) => {
  const [cart, setCart] = useContext(DataContext)
  const { id } = useParams()
  let infos = Data

  function cartAdd() {
    setCart((arr) => {
      const newCart = [...arr];
      const existingItem = newCart.find((i) => i.id === props.id);
      if (existingItem) {
        existingItem.quantity++;
      }
      return newCart;
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

  const cartRemove = (index) => {
    setCart([
        ...cart.slice(0, index),
        ...cart.slice(index+1)
    ])
  }

  let total = props.valor * props.quantity

  return (
  <div className='cart__productOverview'>
    <img src={`https://picsum.photos/id/${props.id*12}/300/300`} alt='produto'/>
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
    <div className='delete__item' onClick={() => cartRemove(props.id-2)}>
      X
    </div>
  </div>
)}