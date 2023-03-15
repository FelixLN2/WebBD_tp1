import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../styles/CoursIndividuel.css';


function CoursIndividuel({ id, titre, discipline, maxEtudiants, dateDebut, dateFin, etudiants, professeur }) {




  return (
    <li key={id}>
      {titre} <br />
      {discipline} <br />
      Étudiants max : {maxEtudiants}<br />
      Date de début : {dateDebut}<br />
      Date de Fin : {dateFin}<br />
      Professeur : {professeur}<br />

      <Link to={discipline} className="bouton-link">Sign up</Link>
    </li>
  )
}

export default CoursIndividuel;