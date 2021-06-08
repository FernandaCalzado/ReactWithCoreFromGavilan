// import logo from './logo.svg';
import React from 'react';
import {  Route, Switch } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
//import IndiceGeneros from './generos/IndiceGeneros';
//import LandingPage from './LandingPage';
import Menu from './utils/Menu';
import rutas from './route-config'

function App() {

  return (
    <>
      {/* <PeliculaIndividual pelicula={peliculaPrueba} /> */}
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Switch>
            {rutas.map(ruta => <Route key={ruta.path} path={ruta.path}
            exact={ruta.exact}>
              <ruta.componente/>
            </Route> )}
            {/* <Route exact path="/">
            <LandingPage/>
            </Route>
            <Route exact path="/generos">
              <IndiceGeneros />
            </Route> */}
          </Switch>
        </div>
      </BrowserRouter>

    </>

  );
}

export default App;
