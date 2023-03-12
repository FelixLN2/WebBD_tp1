import React from "react";
import Card from '../Card.js'



function Professeur({id, nom, prenom, cours, dateEmbauche, photoUrl}){

    
    

    return(
      
        <li key={id}>
          <Card
          prenom={prenom}
          nom={nom}
          cours={cours}
          dateEmbauche={dateEmbauche}
          photoUrl={photoUrl} />

        
      </li>
    )
}

export default Professeur;