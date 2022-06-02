import React, {useState} from 'react'
import './navlinks.css'
import { NavLink } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

const NavLinks = () => {
  const [searchBar, setSearchBar] = useState(false) 

  return (
    <nav className='NavLinks__container'>
      <ul className='NavLinks__container-links'>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">FAVORITOS</a>
        </li>
        <li>
          <a href="/">CARRINHO</a> 
        </li>
        <li>
        {searchBar ? 
        <p className='searchBar_div' onClick={() => setSearchBar(false)}> PESQUISA  <AiOutlineUp /> </p> : 
        <p className='searchBar_div' onClick={() => setSearchBar(true)}> PESQUISA <AiOutlineDown /> </p>
        }{searchBar && (
          <div className='searchBar_popup'><input type='text' name='search' placeholder='Encontre seu produto aqui!' /> </div>
        )}
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks