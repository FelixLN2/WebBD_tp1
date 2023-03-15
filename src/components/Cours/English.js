import React, { useState } from 'react';
import '../../styles/Cours.css';
import Cours from './Cours.js'
import ListeCours from './ListeCours';
import Etudiants from '../Etudiants/Etudiants';



function English() {

    const [cours, setCours] = useState([
        {
            id: '10112-snEnglish',
            titre: '10112-sn',
            discipline: 'English',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin: '11/03/2023',
            professeur: 'A',
            etudiants: 10
        },

    ]);





    return (
        <div className='nouveau-cours'>
            <h1>Cours de {cours.discipline}</h1>
            <p>cours de {cours.discipline}</p>
            <p>{cours.titre}</p>
            <Etudiants />
        </div>
    );
};

export default English;
