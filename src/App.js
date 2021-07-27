import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

import Events from './Pages/Events/Events'
import AgendaDanPenugasan from './Pages/Agenda dan Penugasan/AgendaDanPenugasan'
import Agenda from './Pages/Agenda/Agenda';
import Panduan from './Pages/Panduan/Panduan';
import PageNotFound from './Components/PageNotFound/PageNotFound';

// import logo from './logo.svg';
// import './App.css';


const App = () => {

  return (
    <Router>
      <NavbarComponents />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Event MPKMB" component={Events}/>
        <Route path="/Agenda dan Penugasan" component={AgendaDanPenugasan}/>
        <Route path="/Agenda" component={Agenda}/>
        <Route path="/Panduan" component={Panduan}/>
        <Route component={PageNotFound} />

      </Switch>
    </Router>
  );
}

export default App;
