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
      photoUrl: "../../assets/teacher1.jpg",
      cours: 'English',
      dateEmbauche: '11/03/2023',
    },
    {
      id: 'JaneSmith',
      nom: 'Smith',
      prenom: 'Jane',
      photoUrl: "../../assets/teacher2.jpg",
      cours: 'Math',
      dateEmbauche: '11/03/2023',
    },
    {
      id: 'JohnsonBob',
      nom: 'Johnson',
      prenom: 'Bob',
      photoUrl: "../../assets/teacher3.jpg",
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
        <button onClick={debutEditionHandler}>Ajouter nouveau Prof</button>
      )}
      {enEdition && (
        <FormulaireProfesseurs
          //onSaveProfesseurData={enregistrerProfesseurHandler}
          //onCancel={arretEditionHandler}
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

/*
const Professeurs = (props) => {
  const [enEdition, setEnEdition] = useState('');

  const enregistrerProfesseurHandler = (ProfesseurSaisie) => {
    const donneesProfesseur = {
      ...ProfesseurSaisie,
      id: Math.random().toString(),
    };
    const test = Professeur();
    ListeProfesseurs.Professeurs+=donneesProfesseur;
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
      <div id="liste">
      
      <ListeProfesseurs Professeurs={profs}/>
</div>
    </div>
  );
};*/

export default Professeurs;
