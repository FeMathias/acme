import React, { useState, createContext } from 'react'
import Data from './Data'

export const DataContext = createContext();


export const ProductProvider = (props) => {
  const [favs, setFavs] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState()
  const [toggleStar, setToggleStar] = useState(false)

  return (
    <DataContext.Provider value={[favs, setFavs, cart, setCart, search, setSearch, toggleStar, setToggleStar]}>
      {props.children}
    </DataContext.Provider>
  )

}
