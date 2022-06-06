import React from 'react'

export const NavbarCartComponent = (props) => {
  return (
    <div className='productDescription'>
      <h3>{props.nome}</h3>
      <h3>R${props.valor},00</h3>
    </div>
  )
}
