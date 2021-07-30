import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import BgBlur from './Components/BackgroundBlur/BgBlur';
import Loader from './Components/Loader/Loader';

const Home = lazy(() => import('./Pages/Home/Home'))
const About = lazy(() => import('./Pages/About/About'));
const Agenda = lazy(() => import('./Pages/Agenda dan Penugasan/Agenda/Agenda'));
const AgendaPenugasan = lazy(() => import('./Pages/Agenda dan Penugasan/AgendaPenugasan'))
const Event = lazy(() => import('./Pages/Event/Event'))
const Panduan = lazy(() => import('./Pages/Agenda dan Penugasan/Panduan/Panduan'));
const FAQ = lazy(() => import('./Pages/FAQ/FAQ'));
const PageNotFound = lazy(() => import('./Components/PageNotFound/PageNotFound'))
const Footer = lazy(() => import('./Components/Footer/Footer'));



const App = () => {
  return (
    <Router>

      <BgBlur />
      <NavbarComponents />
      <Suspense fallback={<Loader></Loader>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Panduan" component={Panduan} />
          <Route path="/Event" component={Event} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/AgendaPenugasan" exact component={AgendaPenugasan} />
          <Route path="/AgendaPenugasan/Agenda" exact component={Agenda} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
