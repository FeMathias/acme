import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Navbar, NavLinks, SearchBar, Cards, Footer } from './components'
import { Main, ProductInfo, Cart } from './pages'
import Data from './Data'
import DataPromo from './DataPromo'



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

const cardPromo = DataPromo.map(item => {
  return (
    <Cards 
    key = {item.id}
    id = {item.id}
    img = {item.img}
    nomeCompleto = {item.nomeCompleto}
    valor = {item.valor}
  />
  )
})

const productSpecs = Data.map(item => {
  return (
    <ProductInfo 
      key = {item.id}
      id = {item.id}
      img = {item.img} 
      nomeCompleto = {item.nomeCompleto}
      valor = {item.valor}
      favorite = {item.isFavorite}
      />
  )
})


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <NavLinks />
        <Routes>
          <Route path='/' element={
          <> 
          <Header /> 
          <SearchBar /> 
          <Main />
          <div className='cards'>
            <div className='callout'>
              <h1>PRODUTOS EM DESTAQUE</h1> <br></br>
              <hr></hr>
            </div>
            <div  className='cards__container'>
            {ofcard}
            </div>
            <div className='callout'>
              <h1>PROMOÇÕES</h1> <br></br>
              <hr></hr>
            </div>
            <div  className='cards__container'>
            {cardPromo}
            </div>
          </div>
          </>} />
          <Route path ='cart' element={<Cart />} />
          <Route path ='produto/:id' element={productSpecs}/>
        </Routes>
        <Footer />    
      </BrowserRouter>
    </div>
  );
}

export default App;
