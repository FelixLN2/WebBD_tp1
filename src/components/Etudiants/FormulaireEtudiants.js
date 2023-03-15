import React, { useState } from 'react';
//import '../../styles/FormulaireCours.css';


function FormulaireEtudiants({ adresseMethode }) {
  const [saisieNum, setSaisieNum] = useState('');
  const [saisieNom, setSaisieNom] = useState('');
  const [saisiePrenom, setSaisiePrenom] = useState('');

  const saisieNumHandler = (event) => {
    setSaisieNum(event.target.value);
  };

  const saisieNomHandler = (event) => {
    setSaisieNom(event.target.value);
  };
  const saisiePrenomHandler = (event) => {
    setSaisiePrenom(event.target.value);
  };



  function ajouterEtudiantHandler(event) {
    event.preventDefault();

    const donneesEtudiant = {
      Num: saisieNum,
      Nom: saisieNom,
      Prenom: saisiePrenom,

    };
    if (saisieNum === "") {
      alert("Veuillez entrer un Numero d'Admission")
      return;
    }
    if (saisieNom === "") {
      alert("Veuillez entrer un Nom")
      return;
    }
    if (saisiePrenom === "") {
      alert("Veuillez entrer un Prenom")
      return;
    }


    adresseMethode(donneesEtudiant);
    setSaisieNom('');
    setSaisiePrenom('');
    setSaisieNum('');


  };



  return (
    <div>

      <form onSubmit={ajouterEtudiantHandler}>
        <div className='nouvel_etudiant__controls'>
          <div className='nouvel_etudiant__control'>
            <label>Numéro d'admission</label>
            <input
              type='text'
              value={saisieNum}
              onChange={saisieNumHandler}
            />
          </div>
          <div className='nouvel_etudiant__control'>
            <label>Prénom</label>
            <input
              type='text'
              value={saisiePrenom}
              onChange={saisiePrenomHandler}
            />
          </div>
          <div className='nouvel_etudiant__control'>
            <label>Nom</label>
            <input
              type='text'
              value={saisieNom}
              onChange={saisieNomHandler}
            />
          </div>

        </div>
        <div className='nouvel_etudiant__actions'>
          <button type='submit'>Appliquer</button>
        </div>

      </form>
    </div>

  );
};
//<button type="button" onClick={props.onCancel}>Annuler</button>

export default FormulaireEtudiants;