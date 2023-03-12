import React, { useState } from 'react';
//import '../../styles/FormulaireCours.css';


const FormulaireEtudiants = (props) => {
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
  
   
  
    const ajouterEtudiantHandler = (event) => {
      event.preventDefault();
  
      const donneesCours = {
        Num: saisieNum,
        Nom: saisieNom,
        Prenom: saisiePrenom,
      
      };
  
      
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
          <button type="button" onClick={props.onCancel}>Annuler</button>
          <button type='submit'>Appliquer</button>
        </div>
        
      </form>
    </div>

);
};

export default FormulaireCours;