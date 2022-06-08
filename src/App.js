import './App.css';
import { BrowserRouter, Routes, Route, NavLink, } from 'react-router-dom';
import { Header, Navbar, NavLinks, SearchBar, Cards, CardSection, Footer, CardsSearch} from './components'
import { Main, Cart, Favoritos, ProductInfoAlt, ProdutoTeste } from './pages'
import Data from './Data'
import Head from './Head';
import { ProductProvider } from './DataContext';
import {Resultado} from './pages/Resultado/Resultado'
import { BsSearch } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import ScrollToTop from "./scrollTop";




function App() {
  const [search, setSearch] = useState('')
  const lista = Data 
  const [data, setData] = useState(lista)

  

  function handleChange(event) {
    setSearch(event.target.value)
  }
  
  console.log(lista)
  var newData = lista.filter(function (el) {
    return el.nomeCompleto.toLowerCase().includes(search.toLowerCase())
  })

  console.log('Resultado da pesquisa:', newData)

  const ofcard = newData.map((item, index) => {
    return (
      <CardsSearch 
        key = {item.id}
        id = {item.id}
        nomeCompleto = {item.nomeCompleto}
        valor = {item.valor}
        index = {index}
      />
    )
  })


console.log(search)
  return (
    <ProductProvider>
      <div className='App'>
        <BrowserRouter>
          <Head title={`ACME | Home`} />
          <Navbar />
          <NavLinks />
          <Routes>   
            <Route path='' element={
            <> 
            <Header />
            <Main />
             <div className='searchbar__container'>
              <form className='search__form' onKeyPress={(e) => {if (e.nativeEvent.charChode === 13) {}}}>
              <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
              <NavLink to='pesquisa'><button className='searchbar__button'> <BsSearch /></button></NavLink>
              </form>
            </div>
            <CardSection />
            </>} />
            <Route path ='cart' element={<Cart />} />
            <Route path ='produto/:id' element={<ProductInfoAlt />}/>
            <Route path = 'favoritos' element={<div className='cards'>
              <div className='callout'>
                <h1>FAVORITOS</h1> <br></br>
                <hr></hr>
              </div>
              <div  className='cards__container'>
              <Favoritos />
              </div></div>} />
            <Route path = 'cart/resultado' element={
            <div>
              {<Resultado />}
            </div>}
             />
             <Route path = 'pesquisa' element={
            <div className='cards'>
            <div className='callout'>
              <h1>NOSSOS PRODUTOS</h1> <br></br>
              <hr></hr>
            </div>
            <div  className='cards__container'>
              {ofcard}
            </div>
            <div>
              <NavLink to='../'>{MdOutlineArrowBackIosNew}</NavLink>
            </div>
            </div>
             } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;
