import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Panduan from './Pages/Panduan dan FAQ/Panduan';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';
import Event from './Pages/Event/Event';
import AgendaPenugasan from './Pages/Agenda dan Penugasan/AgendaPenugasan';
import FAQ from './Pages/Panduan dan FAQ/FAQ';
import Agenda from './Pages/Agenda dan Penugasan/Agenda/Agenda';
import BgBlur from './Components/BackgroundBlur/BgBlur';
// import logo from './logo.svg';
// import './App.css';


const App = () => {
  return (
    <Router>
      <BgBlur />
      <NavbarComponents />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Panduan" component={Panduan} />
        <Route path="/Event" component={Event} />
        <Route path="/FAQ" component={FAQ} />
        <Route path="/AgendaPenugasan" component={AgendaPenugasan} />
        <Route path="/Agenda" component={Agenda} />
        {/* <Route path="/Agenda" component={AgendaHari} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
