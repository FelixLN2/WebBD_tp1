import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import Navbar from '../Navbar'
import '../../styles/App.css';


function Accueil() {

    return (
        <div className="App">
          <header className="App-header">
            
            <p>
              Page d'Accueil<br />
              Onglet Cours : Liste des Cours<br />
              Onglet Professeurs : Liste des Professeurs
            </p>
            
            
          </header>
        </div>
      );
}

export default Accueil;
