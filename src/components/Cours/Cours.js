import React, { useState } from 'react';
import '../../styles/Cours.css';
import FormulaireCours from './FormulaireCours.js'
import ListeCours from './ListeCours';
import Professeurs from '../Professeurs/Professeurs';


function Cours() {

    const [enEdition, setEnEdition] = useState('');
    const [cours, setCours] = useState([
        {
            id: '10112-snEnglish',
            titre: '10112-sn',
            discipline: 'English',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin: '11/03/2023',
            professeur: Professeurs.profs,
            etudiants: 10
        },
        {
            id: '10113-snPhysique',
            titre: '10113-sn',
            discipline: 'Physique',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin: '11/03/2023',
            professeur: 'A',
            etudiants: 10
        },
        {
            id: '10114-snMath',
            titre: '10114-sn',
            discipline: 'Math',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin: '11/03/2023',
            professeur: 'A',
            etudiants: 10
        },
    ]);
    function ajouterCours(newCours) {
        setCours(cours.concat(newCours));
        console.log(cours);
    }



    const debutEditionHandler = () => {
        setEnEdition(true);
    };

    const arretEditionHandler = () => {
        setEnEdition(false);
    };





    return (
       
            <div className='nouveau-cours'>

                {!enEdition && (
                    <button className='nouveau_cours' onClick={debutEditionHandler}>Ajouter nouveau Cours</button>
                )}
                {enEdition && (
                    <FormulaireCours

                        adresseMethode={ajouterCours}
                    />
                )}
                <h2>Cours</h2>
                <div className='liste_cours'>
                    <ListeCours Cours={cours} />
                </div>
            </div>
        
    );
};

export default Cours;
