import React from 'react'
import './cart.css'
import {BsFillBagCheckFill, BsFillCartCheckFill} from 'react-icons/bs'

const Cart = () => {
  function addQtd() {
    return console.log('adicionou')
  }
  function subQtd() {
    return console.log('subtraiu')
  }

  function itemTable() {
    return (
    <div className='cart__productOverview'>
    <img src='https://picsum.photos/150' />
    <div className='cart__productOverview-name'>
      <h2>Nome do Produto</h2>
      <h3>#id do prod</h3>
    </div>
    <div className='cart__productOverview-price'>
      <h2>Preço</h2>
      <h3>R$990,00</h3>
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
    </div>)
  }

  return (
    <div className='cart__container'>
      <div className='cart__caller'>
        <span><BsFillBagCheckFill size={32}/></span>
        <h1>MEU CARRINHO</h1>
      </div>
      <hr></hr>
      <div className='cart__data-container'>
        <div className='cart__left'>
          {itemTable()}
          {itemTable()}
          {itemTable()}
          {itemTable()}
          {itemTable()}
          <br></br>
          <hr></hr>
          <div className='cart__totalCalc'>
            <h1>Total</h1>
            <h1>R$8.489,00</h1>
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
            <h1>Total</h1>
            <h1>R$50000</h1>
          </div>
          <hr></hr>
          <div className='cart__checkout-button'>
            <button><BsFillCartCheckFill size={25} /> CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart