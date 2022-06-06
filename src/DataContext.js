import React, { useState, createContext } from 'react'
import Data from './Data'

export const DataContext = createContext();


export const ProductProvider = (props) => {
  const [favs, setFavs] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState([])

  return (
    <DataContext.Provider value={[favs, setFavs, cart, setCart, search, setSearch]}>
      {props.children}
    </DataContext.Provider>
  )

}
