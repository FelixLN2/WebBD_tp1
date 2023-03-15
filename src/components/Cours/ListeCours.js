import React from "react";
import CoursIndividuel from "./CoursIndividuel";

import "../../styles/ListeCours.css";

function ListeCours({ Cours }) {
  console.log(Cours);
  return (
    <ul className="cours-list">
      {Cours.map((cours) => (
        <CoursIndividuel
          key={cours.id}
          titre={cours.titre}
          discipline={cours.discipline}
          maxEtudiants={cours.maxEtudiants}
          dateDebut={cours.dateDebut}
          dateFin={cours.dateFin}
          professeur={cours.professeur}
          etudiants={cours.etudiants}
        />
      ))}
       
    </ul>
  );
}

export default ListeCours;
