import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../styles/CoursIndividuel.css';


function CoursIndividuel({id,titre, discipline, maxEtudiants, dateDebut, dateFin, etudiants, professeur}){

  
    /*const coursTexte = (cours) => {
        let texte = '';
        cours.forEach((element) => {
          texte += element+" ";
        });
        return texte;
      }*/

    return(
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
//Etudiants : {etudiants}<br />
export default CoursIndividuel;