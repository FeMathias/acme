import React, {useContext} from 'react'
import { DataContext } from '../../DataContext'
import './resultado.css'

export const Resultado = () => {
  const {favoritos, carrinho} = useContext(DataContext);
  const [favs, setFavs] = favoritos;
  const [cart, setCart] = carrinho;
  let result = cart


  return (
    <div className='resultado'>
      <p>{JSON.stringify(result)}</p>
    </div>
  )
}
