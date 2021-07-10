import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Error from './components/error/Error';
import Agenda from './components/agendar/Agendar';
import Home from './Home';
import Equipo from './Equipo';
import Perros from './Perros';
import Servicios from './Servicios';
import Contáctanos from './Contacto';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
           <Header />
            <Nav />      

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/equipo">
            <Equipo />

            </Route>
            <Route exact path="/servicios">
            <Servicios />
            </Route>
            <Route path="/agendatucita">
            <Agenda />
            </Route>
            <Route path="/perros">
            <Perros />
            </Route>
            <Route path="/contactanos">
            <Contáctanos />
            </Route>
            <Route path="*">
            <Error />
            </Route>
          </Switch>
          <Footer />

      </Router>
    </div>
  );
}
export default App;
