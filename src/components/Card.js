  import React from "react";


  const Card = ({ prenom, nom, dateEmbauche, cours, photoUrl }) => {
    /*const coursTexte = (cours) => {
      let texte = '';
      cours.forEach((element) => {
        texte += element+" ";
      });
      return texte;
    }*/
    
    return (
    
      <div >
        <h2>{nom}</h2><p>{prenom}</p>

        <div >
          {dateEmbauche}<br />
          {cours}<br />
          <img src={photoUrl} alt={nom} width="150" height="300"/><br />
        </div>
      </div>
      
    );
  };

  export default Card;