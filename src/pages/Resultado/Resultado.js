import React, {useContext} from 'react'
import { DataContext } from '../../DataContext'

export const Resultado = () => {
  const [cart, setCart] = useContext(DataContext)
  let result = cart


  return (
    <div className='resultado'>{JSON.stringify(result)}</div>
  )
}
