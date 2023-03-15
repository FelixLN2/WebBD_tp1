import React from "react";
import Card from '../Card.js'



function Professeur({ id, nom, prenom, cours, dateEmbauche, photo }) {




  return (

    <li key={id}>
      <Card
        id={id}
        prenom={prenom}
        nom={nom}
        cours={cours}
        dateEmbauche={dateEmbauche}
        photo={photo} />


    </li>
  )
}

export default Professeur;