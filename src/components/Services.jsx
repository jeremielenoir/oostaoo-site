import React from 'react';
import '../assets/Section.scss';
import '../assets/Services.scss';
import BlocService from './BlocService';
import BlocSection from './BlocSection';
import { faUser, faUserTie, faUsers } from '@fortawesome/free-solid-svg-icons'
import thema from '../App';
import Grid from '@mui/material/Grid';

function Services({id}){

   

  
    return (

        <>
        <div className='main_container'>
            <div className='section_container' id={id}>
                <BlocSection section_title={'Nos Services'} section_intro={'Comme nous aimons nous appeler, nous sommes la « Javascript entreprise » et proposons principalement des profils possèdant une maitrise experte de Javascript, des profils divers allants de Juniors fraichement sortis de grande école jusqu’aux pointures du métier.'} />

                <Grid container spacing="20" alignItems="stretch" sx={{ padding: 2 }}>
                    <Grid item xs="4" container>
                        <BlocService icon={faUserTie} name={'Lead developpeur front'} explication={'Notre lead dévelopeur est expérimenté et polyvalent, il possède les qualités nécessaire afin d’être l‘acteur responsable majeur de projet en s’adonnant à la coordination et à l’accompagnement de son équipe de dévelopeur à l’aide de ses connaissances techniques solides et précises.'} explication2={'Des compétences techniques solides en front-end, back-end et full-stack, ainsi que des connaissances poussées dans diverses technologies. Notamment une connaissance variés en langage informatique (JS, HTML, JAVA, PHP, etc), en méthodologie de gestion de projet (Agile Scrum), et en outils de développement et de déploiements (Git, Gitlab).'}/>
                    </Grid>
                    <Grid item xs="4" container>
                        <BlocService icon={faUsers} name={'Developpeur full stack'} explication={'Nos développeurs full stack sont multifonctionnels et disposent d’une grande palette de compétence, ils possèdent des connaissances poussées sur l’ensemble des couches de la stack technique, capable d’évoluer sur la pile technologiques des différents projets aussi bien en front-end (notamment javascript avec les frameworks Angular, Exo, Ember, React..) qu’en back-end (Java, php, C#..), leur permettant tout autant de travailler en intégration de contenu que sur des problématiques de back-end poussées.'} more={'g'} />
                    </Grid>
                    <Grid item xs="4" container>
                        <BlocService icon={faUser} name={'Développeur Front'} explication={'Nos developeurs disposent de nombreuses compétences en langage de développement web (HTML, CSS, JS) afin de proposer une navigation fluide et agréable par l’interface dont il a la responsabilité de developer.'} explication2={'Ils maitrisent l’utilisation des frameworks Javascript comme Vue.js, Angular, React, Ext.js, et également d’une bonne connaissance des différents navigateurs et des normes W3C, ainsi que des notions en PHP, SQL'}/>
                    </Grid>
                </Grid>
                
            </div>
        </div>

        </>

    );
}

export default Services;