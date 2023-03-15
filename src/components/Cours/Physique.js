import React, { useState } from 'react';
import '../../styles/Cours.css';
import FormulaireCours from './FormulaireCours.js'
import ListeCours from './ListeCours';
import Etudiants from '../Etudiants/Etudiants';



function Physique() {

    const cours =
    {
        id: '10113-snPhysique',
        titre: '10113-sn',
        discipline: 'Physique',
        maxEtudiants: 30,
        dateDebut: '11/03/2023',
        dateFin: '11/03/2023',
        professeur: 'A',
        etudiants: 10
    };





    return (
        <div className='nouveau-cours'>
            <h1>Cours de {cours.discipline}</h1>
            <p>cours de {cours.discipline}</p>
            <p>{cours.titre}</p>
            <Etudiants />
        </div>
    );
};

export default Physique;
