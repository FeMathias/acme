import React, {useState} from 'react'
import './navlinks.css'
import { NavLink } from "react-router-dom";

const NavLinks = () => {

  return (
    <nav className='NavLinks__container'>
      <ul className='NavLinks__container-links'>
        <li>
          <NavLink to='/' end>HOME</NavLink>
        </li>
        <li>
          <NavLink to='favoritos'>FAVORITOS</NavLink>
        </li>
        <li>
         <NavLink to='cart'>CARRINHO</NavLink>
        </li>
        <li>
          <a href='#Footer'>CONTATO</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks