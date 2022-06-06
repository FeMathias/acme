import React from 'react'

export const NavbarCartComponent = (props) => {
  let total = +props.quantity * +props.valor
  return (
    <div className='productDescription'>
      <h3>{props.nome}</h3>
      <h3>{props.quantity}</h3>
      <h3>R${total},00</h3>
    </div>
  )
}
