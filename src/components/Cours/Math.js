import React, { useState } from 'react';
import '../../styles/Cours.css';
import FormulaireCours from './FormulaireCours.js'
import ListeCours from './ListeCours';



function Math() {

    const cours = useState([
        {
            id: '10114-snMath',
            titre: '10114-sn',
            discipline: 'Math',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin: '11/03/2023',
            professeur: 'A',
            etudiants: 10
        }
    ]);





    return (
        <div className='nouveau-cours'>
            <h1>Cours de {cours.discipline}</h1>
            <p>cours de {cours.discipline}</p>
            <p>{cours.titre}</p>
        </div>
    );
};

export default Math;
