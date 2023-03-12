import React, { useState } from 'react';
import '../../styles/Professeurs.css';
import FormulaireProfesseurs from './FormulaireProfesseurs.js'

import ListeProfesseurs from './ListeProfesseurs';




const Professeurs = (props) => {
  const [enEdition, setEnEdition] = useState(false);

  const enregistrerProfesseurHandler = (ProfesseurSaisie) => {
    const donneesProfesseur = {
      ...ProfesseurSaisie,
      id: Math.random().toString(),
    };
    props.onAddProfesseur(donneesProfesseur);
    setEnEdition(false);
  };

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };


  const [profs, setProfesseur]= useState([
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      photoUrl: 'https://picsum.photos/id/237/200/300',
      cours: ['English 101', 'Creative Writing', 'Journalism'],
      dateEmbauche:'11/03/2023',
    },
    {
      id: 2,
      nom: 'Smith',
      prenom: 'Jane',
      photoUrl: 'https://picsum.photos/id/238/200/300',
      cours: ['Math 101', 'Geometry', 'Statistics'],
      dateEmbauche:'11/03/2023',
    },
    {
      id: 3,
      nom: 'Johnson',
      prenom: 'Bob',
      photoUrl: 'https://picsum.photos/id/239/200/300',
      cours: ['History 101', 'World War II', 'American Civil War'],
      dateEmbauche:'11/03/2023',
    },
  ]);

  function ajouterProf(newProf){
    setProfesseur(profs.concat(newProf));

  }

  return (

    


    <div >
      {!enEdition && (
        <button onClick={debutEditionHandler}>Ajouter nouveau Prof</button>
      )}
      {enEdition && (
        <FormulaireProfesseurs
          onSaveProfesseurData={enregistrerProfesseurHandler}
          onCancel={arretEditionHandler}
          adresseMethode={ajouterProf}
        />
      )}
      <h2>Professeurs</h2>
      <ListeProfesseurs Professeurs={profs}/>

    </div>
  );
};

export default Professeurs;
