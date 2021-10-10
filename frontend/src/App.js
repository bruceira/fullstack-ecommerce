import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Backdrop from './components/Backdrop/Backdrop';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/pages/Cart/Cart';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Sidedrawer from './components/Sidedrawer/Sidedrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
