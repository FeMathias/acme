import React, { useState, useContext } from 'react'
import './navbar.css'
import logo from '../../assets/acme-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Data from '../../Data'
import { NavLink } from 'react-router-dom'
import { RiMenuFoldFill } from 'react-icons/ri'
import avatar from '../../assets/avatar.JPG'
import { DataContext } from '../../DataContext'
import { NavbarCartComponent } from './NavbarCartComponent'
import {Contas} from '../../pages/Cart/Contas'

const Navbar = () => {
  const [cart, setCart] = useContext(DataContext)
  const [toggleCart, setToggleCart] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)

  const navComponente = cart.map(item => {
    return (
      <NavbarCartComponent 
        key = {item.id*10}
        nome = {item.nome}
        valor = {item.valor}
      />
    )
  }) 

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
        <span className='navbar__cart-itemNumber scale-up-center'>{cart.length}</span>
      {toggleCart
          ? <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(false)} />
          : <AiOutlineShoppingCart size={35} onClick={() => setToggleCart(true)} />}
         {toggleCart && (
           <div className='navbar__cart-showItem scale-up-center'>
                {navComponente}
                <h3>Total..........R$<Contas />,00</h3>
              <NavLink to='cart' className='popup__checkout' onClick={() => setToggleCart(false)}>FINALIZAR COMPRA</NavLink>
           </div>
         )}
      </div>
    </div>
  )
}

export default Navbar