import React, {useState, useContext} from 'react'
import './cart.css'
import { DataContext } from '../../DataContext'
import Data from '../../Data'
import { useParams } from 'react-router-dom'

export const CartElement = (props) => {
  const [cart, setCart] = useContext(DataContext)
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
        });
      }
      return newCart;
    });
  }

  let total = props.valor * props.quantity

  function addQtd() {
    return console.log('adicionou')
  }
  function subQtd() {
    return console.log('subtraiu')
  }

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
          {/* <button onClick={subQtd}>-</button>
          <button onClick={addQtd}>+</button> */}
        </div>
      </div>
      <div className='cart__productOverview-total'>
        <h2>Total</h2>
        <h2>R${total},00</h2>
      </div>
    </div>
  </div>
)}