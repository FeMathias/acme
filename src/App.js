import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import { PageSettings, Header, Navbar, NavLinks } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <NavLinks />
        <Header />
      </Router>
    </div>
  );
}

export default App;
