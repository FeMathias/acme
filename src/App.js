import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
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

function App() {
  return (
    <div>
      <Navbar />
      <NavLinks />
      {/* <ProductInfo />
      <Cart /> */}
      <Header />
      <SearchBar />  
      <Router>
      <Main /> 
      <div className='cards'>
        <div className='callout'>
          <h1>PRODUTOS EM DESTAQUE</h1>
          <hr></hr>
        </div>
        <div className='cards__container'>
          {ofcard}
        </div>
        <div className='callout'>
          <h1>PROMOÇÕES</h1>
          <hr></hr>
        </div>
        <div className='cards__container'>
          {cardPromo}
        </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
