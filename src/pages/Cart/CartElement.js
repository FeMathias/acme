import React, {useState, useContext} from 'react'
import './cart.css'
import { DataContext } from '../../DataContext'

export const CartElement = (props) => {
  const [cart, setCart] = useContext(DataContext)

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
          <h3>1</h3>
          <button onClick={subQtd}>-</button>
          <button onClick={addQtd}>+</button>
        </div>
      </div>
      <div className='cart__productOverview-total'>
        <h2>Total</h2>
        <h2>R$990,00</h2>
      </div>
    </div>
  </div>
)}