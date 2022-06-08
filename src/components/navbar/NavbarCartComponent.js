import React, {useState, useContext} from 'react'
import {DataContext} from '../../DataContext'

export const NavbarCartComponent = (props) => {
  let total = +props.quantity * +props.valor
  const [cart, setCart] = useContext(DataContext)
  
  const cartRemove = (i) => {
    setCart([
        ...cart.splice(i, 1)
    ])
  }


  return (
    <div className='productDescription'>
     
      <h3>{props.nome}</h3>
      <h3>{props.quantity}</h3>
      <h3>R${total},00</h3> 
      <p onClick={() => {cartRemove(props.index + 1)}}>X</p>
    </div>
  )
}
