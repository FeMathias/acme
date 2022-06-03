import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/acme-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false)

  const nomeProduto = Data[0].firstName 

  return (
    <div className='navbar__container'>
      < GiHamburgerMenu size={30}/>
      <img src={logo} alt='logotipo' className='navbar__logo'/>
      <div className='navbar__cart'>
        <span className='navbar__cart-itemNumber'>01</span>
      {toggleCart
          ? <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(false)} />
          : <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(true)} />}
         {toggleCart && (
           <div className='navbar__cart-showItem scale-up-center'>
             <div className='productDescription'>
               <h3>Nome Produto</h3>
               <h3>Qtd</h3>
               <h3>Preço</h3>
             </div>
             <div className='productDescription'>
               <p> nomeProduto</p>
               <p>Qtd</p>
               <p>Preço</p>
             </div>
           </div>
         )}
      </div>
    </div>
  )
}

export default Navbar