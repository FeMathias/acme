import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Header, Navbar, NavLinks, SearchBar, Cards, Footer} from './components'
import { Main, Cart, Favoritos, ProductInfoAlt } from './pages'
import Data from './Data'
import Head from './Head';
import { ProductProvider } from './DataContext';
import {Resultado} from './pages/Resultado/Resultado'
import { useState } from 'react';

const ofcard = Data.map(item => {
  return (
    <Cards 
      key = {item.id}
      id = {item.id}
      img = {item.img}
      firstName = {item.firstName}
      secondName = {item.secondName}
      nomeCompleto = {item.nomeCompleto}
      valor = {item.valor}
      favorite = {item.isFavorite}
    />
  )
})

function App() {
  const [search, setSearch] = useState([])

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
            <SearchBar search={search} />
            <div className='cards'>
              <div className='callout'>
                <h1>NOSSOS PRODUTOS</h1> <br></br>
                <hr></hr>
              </div>
              <div  className='cards__container'>
              {ofcard}
              </div>
            </div>
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
