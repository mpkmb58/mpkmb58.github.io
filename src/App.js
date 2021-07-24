import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
// import logo from './logo.svg';
import './App.css';


const App = () => {

  return (
    <BrowserRouter>
      <NavbarComponents />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
