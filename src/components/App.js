import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import '../styles/App.css';
import Accueil from './Accueil/Accueil.js';
import Professeurs from './Professeurs/Professeurs.js';
import Cours from './Cours/Cours.js';
import Math from './Cours/Math.js';
import English from './Cours/English.js';
import Physique from './Cours/Physique.js';
import Navbar from './Navbar';


function App() {


  return (
    <div className="App">
      <Navbar />
      <header className="App-header">




      </header>

      <Router>
        <Switch>
          <Route exact path="/" >
            <Accueil />
          </Route>
          <Route path="/Professeurs">
            <Professeurs />
          </Route>
          <Route path="/Accueil" >
            <Accueil />
          </Route>
          <Route path="/Cours" >
            <Cours />
          </Route>
          <Route path="/Math" >
            <Math />
          </Route>
          <Route path="/English" >
            <English />
          </Route>
          <Route path="/Physique" >
            <Physique />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
