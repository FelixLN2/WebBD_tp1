import React, { useState } from 'react';
import '../../styles/FormulaireProfesseurs.css';
import Card from "../Card";


function FormulaireProfesseurs({ adresseMethode }) {
  const [saisiePrenom, setSaisiePrenom] = useState('')
  const [saisieNom, setSaisieNom] = useState('')


  function ajouterProfesseurHandler(event) {
    event.preventDefault();
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    const donneesProf = {
      id: saisieNom + saisiePrenom,
      nom: saisieNom,
      prenom: saisiePrenom,
      cours: [],
      photoUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      dateEmbauche: utc,

    };
    if (saisiePrenom === "") {
      alert("Veuillez entrer un prenom")
      return;
    }
    if (saisieNom === "") {
      alert("Veuillez entrer un nom")
      return;
    }

    adresseMethode(donneesProf);
    setSaisiePrenom('');
    setSaisieNom('');
    ;

  }
  function saisiePrenomHandler(event) {

    setSaisiePrenom(event.target.value)
  }

  function saisieNomHandler(event) {
    setSaisieNom(event.target.value)
  }



  return (
    <div className='nouveau_prof_control'>

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

        </div>
        <div>
          <button  className='nouveau_prof_actions' type='submit'>Appliquer</button>
        </div>

      </form>
    </div>




  );
};

export default FormulaireProfesseurs;