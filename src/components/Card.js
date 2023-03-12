  import React from "react";


  const Card = ({ prenom, nom, dateEmbauche, cours, photoUrl }) => {
    const coursTexte = (cours) => {
      let texte = '';
      cours.forEach((element) => {
        texte += element+" ";
      });
      return texte;
    }
    
    return (
      <li>
      <div >
        <h2>{nom}</h2><p>{prenom}</p>

        <div >
          {dateEmbauche}<br />
          {coursTexte(cours)}<br />
          <img src={photoUrl} alt={nom} /><br />
        </div>
      </div>
      </li>
    );
  };

  export default Card;