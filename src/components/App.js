import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from '../assets/logo.png';
import '../styles/App.css';
import Accueil from './Accueil/Accueil.js'
import Professeurs from './Professeurs/Professeurs.js'
import Cours from './Cours/Cours.js'
import Navbar from './Navbar'
/*
<div className="App">
      <header className="App-header">
        <Navbar/>
        
        <p>
          
        </p>
        
        
      </header>
      <Router>
    <div>
    <img src={logo}  className="App-logo" alt="logo" />
    <nav>
      
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Cours">Cours</Link>
        </li>
        <li>
          <Link to="/Professeurs">Professeurs</Link>
        </li>
      </ul>
    </nav>
</div>
    <Switch>
     
      <Route path="/Professeurs" component={Professeurs}>
        <Professeurs />
      </Route>
      <Route path="/Accueil" component={Accueil}>
        <Accueil />
      </Route>
    </Switch>
  </Router>
    </div>
*/

function App() {


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        
        
        
      </header>
      <Router>
    <Switch>
     
      <Route path="/Professeurs">
        <Professeurs />
      </Route>
      <Route path="/Accueil" >
        <Accueil />
      </Route>
      <Route path="/Cours" >
        <Cours />
      </Route>
    </Switch>
  </Router>
  </div>
  );
  }


export default App;
