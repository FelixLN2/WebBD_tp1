import React, { useState } from 'react';
import '../../styles/FormulaireProfesseurs.css';
import Card from "../Card";



function FormulaireProfesseurs({adresseMethode}){
    const [saisiePrenom, setSaisiePrenom] = useState('')
    const [saisieNom, setSaisieNom] = useState('')
    const [saisieDate, setSaisieDate] = useState('')

    function ajouterProfesseurHandler(event){
        event.preventDefault();
        const donneesProf = {
            id:4,
            nom: saisieNom,
            prenom: saisiePrenom,
            cours:[],
            photoUrl:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            dateEmbauche: saisieDate,
 
          };
            if(saisiePrenom===""){
                alert("Veuillez entrer un prenom")
                return;
            }
            if(saisieNom===""){
                alert("Veuillez entrer un nom")
                return;
            }
            if(saisieDate===""){
                alert("Veuillez entrer une date")
                return;
            }
          adresseMethode(donneesProf);
          setSaisiePrenom('');
          setSaisieNom('');
          setSaisieDate('');
        
    }
    function saisiePrenomHandler(event){
        
        setSaisiePrenom(event.target.value)
      }
      function saisieDateHandler(event){
        
        setSaisieDate(event.target.value)
      }

    function saisieNomHandler(event){
        setSaisieNom(event.target.value)
      }

    /*function closeHandler() {
        handleClose();
    }*/
 /*  
}


const FormulaireProfesseurs = (props) => {
    const [saisiePrenom, setSaisiePrenom] = useState('');
    const [saisieNom, setSaisieNom] = useState('');
    const [saisieDate, setSaisieDate] = useState('');
  
  
    const saisiePrenomHandler = (event) => {
      setSaisiePrenom(event.target.value);
    };
  
    const saisieNomHandler = (event) => {
      setSaisieNom(event.target.value);
    };
  
    const saisieDateHandler = (event) => {
        setSaisieDate(event.target.value);
      };
  
    const ajouterProfesseurHandler = (event) => {
      event.preventDefault();
  
      const donneesProf = {
        prenom: saisiePrenom,
        nom: saisieNom,
        date: new Date(saisieDate),
      };
  
      props.onSaveExpenseData(donneesProf);
      setSaisiePrenom('');
      setSaisieNom('');
      setSaisieDate('');
    };
*/


  return (
<div>
  
  <form onSubmit={ajouterProfesseurHandler}>
      <div className='nouveau_prof__controls'>
          <div className='nouveau_prof__control'>
            <label>Prénom</label>
            <input
              type='text'
              value={saisiePrenom}
              onChange={saisiePrenomHandler}
            />
          </div>
          <div className='nouveau_prof__control'>
            <label>Nom</label>
            <input
              type='text'
              value={saisieNom}
              onChange={saisieNomHandler}
            />
          </div>
          <div className='nouveau_prof__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={saisieDate}
              onChange={saisieDateHandler}
            />
          </div>
        </div>
        <div className='nouveau_prof__actions'>
          <button type='submit'>Appliquer</button>
        </div>
        
      </form>
    </div>

  //<button type="button" onClick={adresseMethode.onCancel}>Annuler</button>
          
   /* <div classnom="teacher-list">
      {teachers.map((teacher) => (
        <div classnom="teacher-card" key={teacher.id}>
          <img classnom="teacher-card__photo" src={teacher.photoUrl} alt={`${teacher.nom}'s photo`} />
          <h2 classnom="teacher-card__nom">{teacher.nom}</h2>
          <ul classnom="teacher-card__classes">
            {teacher.classes.map((classnom) => (
              <li key={classnom}>{classnom}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  */
 /*
  <div classnom="professors-list">
      {professeurs.map((professeur) => (
        <Card key={professeur.id} title={professeur.nom}>
          <p>{professeur.title}</p>
          <p>{professeur.department}</p>
        </Card>
      ))}
    </div>*/

  );
};

export default FormulaireProfesseurs;