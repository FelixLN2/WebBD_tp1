import React, { useState } from 'react';
import '../../styles/FormulaireCours.css';



function FormulaireCours({ adresseMethode }) {
  const [saisieTitre, setSaisieTitre] = useState('')
  const [saisieDiscipline, setSaisieDiscipline] = useState('')
  const [saisieDateDebut, setSaisieDateDebut] = useState('')
  const [saisieDateFin, setSaisieDateFin] = useState('')
  const [saisieEtudiants, setSaisieEtudiants] = useState('')

  function ajouterCoursHandler(event) {
    event.preventDefault();
    const donneesCours = {
      id: saisieTitre + saisieDiscipline,
      titre: saisieTitre,
      discipline: saisieDiscipline,

      maxEtudiants: saisieEtudiants,
      dateDebut: saisieDateDebut,
      dateFin: saisieDateFin,

    };
    if (saisieTitre === "") {
      alert("Veuillez entrer un Titre")
      return;
    }
    if (saisieDiscipline === "") {
      alert("Veuillez entrer un Discipline")
      return;
    }
    if (saisieDateDebut === "") {
      alert("Veuillez entrer une date de début")
      return;
    }
    if (saisieDateFin === "") {
      alert("Veuillez entrer une date de fin")
      return;
    }
    adresseMethode(donneesCours);
    setSaisieTitre('');
    setSaisieDiscipline('');
    setSaisieDateDebut('');
    setSaisieDateFin('');
    setSaisieEtudiants('');
  }
  function saisieTitreHandler(event) {

    setSaisieTitre(event.target.value)
  }
  function saisieDateFinHandler(event) {

    setSaisieDateFin(event.target.value)
  }

  function saisieDateDebutHandler(event) {

    setSaisieDateDebut(event.target.value)
  }
  function saisieEtudiantsHandler(event) {

    setSaisieEtudiants(event.target.value)
  }

  function saisieDisciplineHandler(event) {
    setSaisieDiscipline(event.target.value)
  }

  /*
  const FormulaireCours = (props) => {
      const [saisieTitre, setSaisieTitre] = useState('');
      const [saisieEtudiants, setSaisieEtudiants] = useState('');
      const [saisieDiscipline, setSaisieDiscipline] = useState('');
      const [saisieDateDebut, setSaisieDateDebut] = useState('');
      const [saisieDateFin, setSaisieDateFin] = useState('');
    
      const saisieTitreHandler = (event) => {
        setSaisieTitre(event.target.value);
      };
    
      const saisieDisciplineHandler = (event) => {
        setSaisieDiscipline(event.target.value);
      };
      const saisieEtudiantsHandler = (event) => {
          setSaisieEtudiants(event.target.value);
        };
    
      const saisieDateDebutHandler = (event) => {
          setSaisieDateDebut(event.target.value);
      };
      const saisieDateFinHandler = (event) => {
          setSaisieDateFin(event.target.value);
      };
    
      const ajouterCoursHandler = (event) => {
        event.preventDefault();
    
        const donneesCours = {
          Titre: saisieTitre,
          Discipline: saisieDiscipline,
          etudiant: saisieEtudiants,
          dateDebut: new Date(saisieDateDebut),
          dateFin: new Date(saisieDateFin),
        };
        props.ajoutercours(donneesCours)
        
        setSaisieTitre('');
        setSaisieDiscipline('');
        setSaisieEtudiants('');
        setSaisieDateDebut('');
        setSaisieDateFin('');
        
      };
  */


  return (
    <div>

      <form onSubmit={ajouterCoursHandler}>
        <div className='nouveau_cours__controls'>
          <div className='nouveau_cours__control'>
            <label>Titre</label>
            <input
              type='text'
              value={saisieTitre}
              onChange={saisieTitreHandler}
            />
          </div>
          <div className='nouveau_cours__control'>
            <label>Discipline</label>
            <input
              type='text'
              value={saisieDiscipline}
              onChange={saisieDisciplineHandler}
            />
          </div>
          <div className='nouveau_cours__control'>
            <label>Maximum d'étudiants</label>
            <input
              type='number'
              min='1'
              max='40'
              value={saisieEtudiants}
              onChange={saisieEtudiantsHandler}
            />
          </div>
          <div className='nouveau_cours__control'>
            <label>Date de début</label>
            <input
              type='date'
              min='2023-01-01'
              max='2023-06-06'
              value={saisieDateDebut}
              onChange={saisieDateDebutHandler}
            />
          </div>
          <div className='nouveau_cours__control'>
            <label>Date de fin</label>
            <input
              type='date'
              min='2023-01-01'
              max='2023-06-06'
              value={saisieDateFin}
              onChange={saisieDateFinHandler}
            />
          </div>
        </div>
        <div className='nouveau_cours__actions'>

          <button type='submit'>Appliquer</button>
        </div>

      </form>
    </div>
    //<button type="button" onClick={props.onCancel}>Annuler</button>
  );
};

export default FormulaireCours;