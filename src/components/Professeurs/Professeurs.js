import React, { useState } from 'react';
import '../../styles/Professeurs.css';
import FormulaireProfesseurs from './FormulaireProfesseurs.js'
import Professeur from "./Professeur";
import ListeProfesseurs from './ListeProfesseurs';

function Professeurs(){
  const [enEdition, setEnEdition] = useState('');
  const [profs, setProfesseurs]= useState([
    {
      id: 1,
      nom: 'Doe',
      prenom: 'John',
      photoUrl: "https://assets.everspringpartners.com/dims4/default/dbab572/2147483647/strip/true/crop/500x281+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Feverspring-brightspot.s3.amazonaws.com%2F02%2Fd1%2F5a5420a64bbd88bff3364544f3a0%2F5-reasons-why-becoming-a-teacher-might-be-right-for-you.jpg",
      cours: ['English 101', 'Creative Writing', 'Journalism'],
      dateEmbauche:'11/03/2023',
    },
    {
      id: 2,
      nom: 'Smith',
      prenom: 'Jane',
      photoUrl: "../../assets/teacher2.png",
      cours: ['Math 101', 'Geometry', 'Statistics'],
      dateEmbauche:'11/03/2023',
    },
    {
      id: 3,
      nom: 'Johnson',
      prenom: 'Bob',
      photoUrl: "a.jpg",
      cours: ['History 101', 'World War II', 'American Civil War'],
      dateEmbauche:'11/03/2023',
    },
  ]);

  function ajouterProf(nouveauProf){
    setProfesseurs(profs.concat(nouveauProf));
    console.log(profs);
  }

  const debutEditionHandler = () => {
    setEnEdition(true);
  };

  const arretEditionHandler = () => {
    setEnEdition(false);
  };

  return(
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
      
      <ListeProfesseurs Professeurs={profs}/>
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
