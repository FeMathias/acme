import React, {useState, useContext} from 'react'
import './cart.css'
import {BsFillBagCheckFill, BsFillCartCheckFill} from 'react-icons/bs'
import Head from '../../Head'
import Data from '../../Data'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../DataContext'
import { CartElement } from './CartElement'
import { Contas } from './Contas'


const Cart = () => {
  const [cart, setCart] = useContext(DataContext)
  function finalizarCompra() {
    setCart([])
  }

  let total = 0
  cart.forEach (element => {
    total += (element.value * element.quantity)
  })

  const cartElement = cart.map(item => {
    return (
      <CartElement 
        key = {item.id}
        id = {item.id}
        nomeCompleto = {item.nome}
        valor = {item.value}
        quantity = {item.quantity}
      />
    )
  })

  function addQtd() {
    return console.log('adicionou')
  }
  function subQtd() {
    return console.log('subtraiu')
  }

  function finalizarCompra() {
    return console.log(JSON.stringify.cart)
  }

  return (
    <div className='cart__container'>
       <Head title={`ACME | Carrinho`} />
      <div className='cart__caller'>
        <span><BsFillBagCheckFill size={32}/></span>
        <h1>MEU CARRINHO</h1>
      </div>
      <hr></hr>
      <div className='cart__data-container'>
        <div className='cart__left'>
          {cartElement}

          <br></br>
          <hr></hr>
          <div className='cart__totalCalc'>
            <h1>Total</h1>
            <h1>R${total},00</h1>
          </div>
        </div>
        <div className='cart__checkout'>
          <h2>CÓDIGO DE PROMOÇÃO</h2>
          <input type='text' placeholder='Código Promo'></input>
          <div className='cart__checkout-descontos'>
            <h3>Desconto aplicado</h3>
            <h3>X</h3>
          </div>
          <hr></hr>
          <div className='cart__checkout-total'>
            <h1>Total</h1><h1>R${total},00</h1>
          </div>
          <hr></hr>
          <div className='cart__checkout-button'>
            <NavLink  className='checkout' to='resultado'><button onClick={finalizarCompra}><BsFillCartCheckFill size={25} /> CHECK OUT</button></NavLink>
          </div>
        </div>
      </div>
      <div className='goodbye'></div>
    </div>
  )
}

export default Cart