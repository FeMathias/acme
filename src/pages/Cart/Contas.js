import React, {useState, useContext} from 'react'
import './cart.css'
import { DataContext } from '../../DataContext'


export const Contas = () => {
  const [cart, setCart] = useContext(DataContext)

  const total = cart.map(item => item.valor).reduce((prev, curr) => prev + curr, 0)
  return (
    total
  )
}
