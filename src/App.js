import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Header, Navbar, NavLinks, SearchBar, Cards, CardSection, Footer} from './components'
import { Main, Cart, Favoritos, ProductInfoAlt } from './pages'
import Data from './Data'
import Head from './Head';
import { ProductProvider } from './DataContext';
import {Resultado} from './pages/Resultado/Resultado'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState([])
  function handleChange(event) {
    setSearch(event.target.value)
  }
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
              <input type='text' name='searchBar' className='searchbar__input' placeholder='Encontre o seu produto ACME!' onChange={handleChange}/>
              <button className='searchbar__button'> <BsSearch /></button>
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
              <Resultado />
            </div>}
             />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;
