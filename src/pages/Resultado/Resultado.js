import React, {useContext} from 'react'
import { DataContext } from '../../DataContext'
import './resultado.css'

export const Resultado = () => {
  const [cart, setCart] = useContext(DataContext)
  let result = cart


  return (
    <div className='resultado'>
      <p>{JSON.stringify(result)}</p>
    </div>
  )
}
