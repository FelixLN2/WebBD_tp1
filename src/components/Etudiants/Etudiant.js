import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import '../../styles/Etudiant.css';


function Etudiant({ Num, Nom, Prenom }) {



  return (
    <li key={Num}>
      {Num} <br />
      {Nom} {Prenom}<br />



    </li>
  )
}
//Etudiants : {etudiants}<br />
export default Etudiant;