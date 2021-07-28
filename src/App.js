import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';
import Event from './Pages/Event/Event';
import AgendaPenugasan from './Pages/Agenda dan Penugasan/AgendaPenugasan';
import Agenda from './Pages/Agenda dan Penugasan/Agenda/Agenda';
// import logo from './logo.svg';
// import './App.css';


const App = () => {

  return (
    <Router>
      <NavbarComponents />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Event" component={Event} />
        <Route path="/AgendaPenugasan" component={AgendaPenugasan} />
        <Route path="/Agenda" component={Agenda} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
