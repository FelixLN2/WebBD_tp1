import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Navbar from '../Navbar'
import '../../styles/App.css';


function Accueil() {

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} alt="logo"></img>


      </header>
      <p>
        Page d'Accueil<br />
        Onglet Cours : Liste des Cours<br />
        Onglet Professeurs : Liste des Professeurs
      </p>
    </div>
  );
}

export default Accueil;
