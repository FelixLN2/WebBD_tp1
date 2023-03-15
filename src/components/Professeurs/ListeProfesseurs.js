import React from "react";
import Professeur from "./Professeur";

import "../../styles/ListeProfesseurs.css";

function ListeProfesseurs({ Professeurs }) {
  console.log(Professeurs);
  return (
    <ul className="professeur-list">
      {Professeurs.map((professeur) => (
        <Professeur
          key={professeur.id}
          prenom={professeur.prenom}
          nom={professeur.nom}
          dateEmbauche={professeur.dateEmbauche}
          cours={professeur.cours}
          photo={professeur.photo}
        />

      ))}

    </ul>
  );
}

export default ListeProfesseurs;
