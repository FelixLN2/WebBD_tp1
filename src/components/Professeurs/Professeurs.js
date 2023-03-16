import React, { useState } from 'react';
import '../../styles/Professeurs.css';
import FormulaireProfesseurs from './FormulaireProfesseurs.js'
import Professeur from "./Professeur";
import ListeProfesseurs from './ListeProfesseurs';


function Professeurs() {
  const [enEdition, setEnEdition] = useState('');
  const [profs, setProfesseurs] = useState([
    {
      id: 'JohnDoe',
      nom: 'Doe',
      prenom: 'John',
      photo: "../../assets/teacher1.jpg",
      cours: 'English',
      dateEmbauche: '11/03/2023',
    },
    {
      id: 'JaneSmith',
      nom: 'Smith',
      prenom: 'Jane',
      photo: "../../assets/teacher2.jpg",
      cours: 'Math',
      dateEmbauche: '11/03/2023',
    },
    {
      id: 'BobJohnson',
      nom: 'Johnson',
      prenom: 'Bob',
      photo: "../../assets/teacher3.jpg",
      cours: 'Physique',
      dateEmbauche: '11/03/2023',
    },
  ]);

  function ajouterProf(nouveauProf) {
    setProfesseurs(profs.concat(nouveauProf));
    console.log(profs);
  }

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return (
    <div >
      {!enEdition && (
        <button className='nouveau_prof' onClick={debutEditionHandler}>Ajouter nouveau Prof</button>
      )}
      {enEdition && (
        <FormulaireProfesseurs
        
          adresseMethode={ajouterProf}
        />
      )}
      <h2>Professeurs</h2>
      <div id="liste">

        <ListeProfesseurs Professeurs={profs} />
      </div>
    </div>
  );
}


export default Professeurs;
