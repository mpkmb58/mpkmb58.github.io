import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponents from './Components/NavbarComponent/NavbarComponents';
import Panduan from './Pages/Panduan dan FAQ/Panduan';
import FAQ from './Pages/Panduan dan FAQ/FAQ';
import BgBlur from './Components/BackgroundBlur/BgBlur';

const Home = lazy(() => import('./Pages/Home/Home'))
const About = lazy(() => import('./Pages/About/About'));
const Agenda = lazy(() => import('./Pages/Agenda dan Penugasan/Agenda/Agenda'));
const AgendaPenugasan = lazy(() => import('./Pages/Agenda dan Penugasan/AgendaPenugasan'))
const Event = lazy(() => import('./Pages/Event/Event'))
const PageNotFound = lazy(() => import('./Components/PageNotFound/PageNotFound'))

const Footer = lazy(() => import('./Components/Footer/Footer'));



const App = () => {
  return (
    <Router>
      <BgBlur />
      <NavbarComponents />
      <Suspense fallback={<h1>Loading..</h1>}>
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
