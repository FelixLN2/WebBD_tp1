import React from "react";
import Etudiant from "./Etudiant";

import "../../styles/ListeEtudiants.css";

function ListeEtudiant({ Etudiants }) {
  console.log(Etudiants);
  return (
    <ul >
      {Etudiants.map((etudiant) => (
        <Etudiant
          key={etudiant.Num}
          Num={etudiant.Num}
          Nom={etudiant.Nom}
          Prenom={etudiant.Prenom}

        />
      ))}

    </ul>
  );
}

export default ListeEtudiant;
