import React, { useState } from 'react';
import '../../styles/Cours.css';
import FormulaireCours from './FormulaireCours.js'
import ListeCours from './ListeCours';




const Cours = (props) => {
const [enEdition, setEnEdition] = useState(false);

    const enregistrerCoursHandler = (CoursSaisie) => {
        const donneesCours = {
        ...CoursSaisie,
        id: Math.random().toString(),
        };
        props.onAddCours(donneesCours);
        
        setEnEdition(false);
        return [donneesCours];
    };

    const debutEditionHandler = () => {
        setEnEdition(true);
    };

    const arretEditionHandler = () => {
        setEnEdition(false);
    };


    const [cours, setCours]= useState([
       {
            id:1,
            titre: '10112-sn',
            discipline: 'English',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin:'11/03/2023',
            professeur:'A',
            etudiants:10
            },
            {
            id:2,
            titre: '10112-sn',
            discipline: 'English',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin:'11/03/2023',
            professeur:'A',
            etudiants:10
            },
            {
            if:3,
            titre: '10112-sn',
            discipline: 'English',
            maxEtudiants: 30,
            dateDebut: '11/03/2023',
            dateFin:'11/03/2023',
            professeur:'A',
            etudiants:10
        },
    ]);

    function ajouterCours(newCours){
        setCours(cours.concat(newCours));
    }
    
    return (
        <div className='nouveau-cours'>
            
            {!enEdition && (
            <button onClick={debutEditionHandler}>Ajouter nouveau Cours</button>
            )}
            {enEdition && (
                <FormulaireCours
                onSaveCoursData={enregistrerCoursHandler}
                onCancel={arretEditionHandler}
                adresseMethode={ajouterCours}
                />
            )}
            <h2>Cours</h2>
            <ListeCours Cours={cours}/>
        </div>
    );
};

export default Cours;
