import React, {useState} from 'react'
import './navlinks.css'
import { NavLink } from "react-router-dom";

const NavLinks = () => {

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
          <a href='#Footer'>CONTATO</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks