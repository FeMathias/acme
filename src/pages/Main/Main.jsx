import React from 'react'
import './main.css'
import Head from '../../Head'

const Main = () => {
  return (
    <div className='main__container'> <Head title={`ACME | Home`} />
      <section className='main__top-grid'>
        <div className='main__top-grid-left'>
          <p>COMPRE SUA BIGORNA COM 80% DE DESCONTO!</p>
        </div>
        <div className='main__top-grid-right-upper'>
          <p>COMPRE SUA BIGORNA COM 80% DE DESCONTO!</p>
        </div>
        <div className='main__top-grid-right-lower'>
         <p>COMPRE SUA BIGORNA COM 80% DE DESCONTO!</p>
        </div>
      </section>
    </div>
  )
}

export default Main