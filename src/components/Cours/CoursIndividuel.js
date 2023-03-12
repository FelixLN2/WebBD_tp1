import React from "react";




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
        {titre} <br />{discipline} <br />
        Étudiants max : {maxEtudiants}<br />
        Date de début : {dateDebut}<br />
        Date de Fin : {dateFin}<br />
        Professeur : {professeur}<br />
        Etudiants : {etudiants}<br />
        <button>Voir</button>
      </li>
    )
}

export default CoursIndividuel;