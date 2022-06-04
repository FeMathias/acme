import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/acme-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import { NavLink } from 'react-router-dom'
import { RiMenuFoldFill } from 'react-icons/ri'
import avatar from '../../assets/avatar.JPG'

const Navbar = () => {
  const [toggleCart, setToggleCart] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <div className='navbar__container'>
      <div className='burger'>
        {sideMenu
          ? <div className='burger-pointer'><RiMenuFoldFill size={30} onClick={() => setSideMenu(false)} /></div>
          : <div className='burger-pointer'><GiHamburgerMenu size={30} onClick={() => setSideMenu(true)}  /></div>}
          {sideMenu && (
        <div className='sideMenu animeLeft'>
          <div onClick={() => setSideMenu(false)} className='recuar__menu'>
            < RiMenuFoldFill size={30}/>
          </div>
          <div className='nameCaller'>
            <h1> Olá, <strong>HYPE</strong> !</h1>
          </div>
          <hr></hr>
          <img src={avatar} alt='avatar' />
          <br></br>
          <hr></hr>
          <ul>
            <li className='lista__menu-lateral'>Minha conta</li>
            <li className='lista__menu-lateral'>Minhas compras</li>
            <li className='lista__menu-lateral'>Configuração</li>
          </ul>
        </div>)}
      </div>
      <div className='logo-cont'><img src={logo} alt='logotipo' className='navbar__logo'/></div>
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
              <NavLink to='cart' className='popup__checkout' onClick={() => setToggleCart(false)}>FINALIZAR COMPRA</NavLink>
           </div>
         )}
      </div>
    </div>
  )
}

export default Navbar