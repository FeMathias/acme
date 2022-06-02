import React from 'react'
import './pageSettings.css'
import FlagBR from '../../assets/br.svg'


const Navbar = () => {
  return (
    <div className="pageSettings__container">
      <div className='pageSettings__select'>
        <img src={FlagBR} className='pageSettings__flag' alt='Flag'/>
        <select name="Language" className='pageSettings__select-language'>
          <option value="PT-BR">
            PT-BR
          </option>
          <option value='EN-US'>
            EN-US
          </option>
        </select>
        <select name="Currency" className='pageSettings__select-currency'>
          <option value="BRL">
            BRL
          </option>
          <option value='USD'>
            USD
          </option>
        </select>
      </div>
    </div>
  )
}

export default Navbar