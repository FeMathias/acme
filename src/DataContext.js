import React, { useState, createContext } from 'react'
import Data from './Data'

export const DataContext = createContext();


export const ProductProvider = (props) => {
  const [favs, setFavs] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [toggleHeart, setToggleHeart] = useState(false)
  const [sortCart, setSortCart] = useState('key')

  let total = 0
  cart.forEach (element => {
    total += (element.value * element.quantity)
  })


  let sortedFavs = favs.slice().sort((a, b) => {
    return a.id - b.id
  })

  return (
    <DataContext.Provider value={[favs, setFavs, cart, setCart, search, setSearch, toggleHeart, setToggleHeart, sortedFavs, total, sortCart, setSortCart]}>
      {props.children}
    </DataContext.Provider>
  )

}
