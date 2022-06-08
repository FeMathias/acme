import React, {useState, useContext} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../../DataContext'

export const NavbarCartComponent = (props) => {
  let total = +props.quantity * +props.valor
  const {favoritos, carrinho} = useContext(DataContext);
  const [cart, setCart] = carrinho;

  function deleteTask(pos) {   
    setCart(oldArray => oldArray.filter((item, index) => index !== pos));
  }

  return (
    <div className='productDescription'>
      <h3>{props.nome}</h3>
      <h3>{props.quantity}</h3>
      <h3>R${total},00</h3>
      <p onClick={() => {deleteTask(props.index)}}>X</p>
    </div>
  )
}
