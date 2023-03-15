import React from "react";
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import '../styles/Card.css';
const Card = ({ id, prenom, nom, dateEmbauche, cours, photo }) => {
 
  //Les images marchent pas anyway donc voila un placeholder
 photo = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  

  return (

    <div className="card-prof">
      <h2>{nom}</h2><p>{prenom}</p>

      <div >
        {dateEmbauche}<br />
        {cours}<br />
        <img src={photo} alt={nom} width="150" height="300" /><br />
      </div>
    </div>

  );
};

export default Card;