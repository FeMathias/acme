import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/acme-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false)

  return (
    <div className='navbar__container'>
      < GiHamburgerMenu size={30}/>
      <img src={logo} alt='logotipo' className='navbar__logo'/>
      <div className='navbar__cart'>
      {toggleCart
          ? <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(false)} />
          : <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(true)} />}
         {toggleCart && (
           <div className='navbar__cart-showItem scale-up-center'>
             CART ITEMS
             <img src='https://picsum.photos/200/300' className='navbar__cart-imgProduct' alt='Imagem Produto'/>
           </div>
         )}
      </div>
    </div>
  )
}

export default Navbar