import React from 'react'
import Data from '../../Data'
import Cards from './Cards'

const CardSection = () => {

  const ofcard = Data.map(item => {
    return (
      <Cards 
        key = {item.id}
        id = {item.id}
        nomeCompleto = {item.nomeCompleto}
        valor = {item.valor}
      />
    )
  })

  return (
    <div className='cards'>
      <div className='callout'>
        <h1>NOSSOS PRODUTOS</h1> <br></br>
        <hr></hr>
      </div>
      <div  className='cards__container'>
        {ofcard}
      </div>
  </div>
  )
}

export default CardSection