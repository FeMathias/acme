import React, { useState, createContext } from 'react'
import Data from './Data'

export const DataContext = createContext();


export const ProductProvider = (props) => {
  const [favs, setFavs] = useState([])
  const [cart, setCart] = useState([])

  return (
    <DataContext.Provider value={{favoritos: [favs, setFavs], carrinho: [cart, setCart]}}>
      {props.children}
    </DataContext.Provider>
  )

}
