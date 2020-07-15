import React, {useState} from 'react';
import '../assets/Section.scss';



const BlocSection = (props) =>{

    return <div className='title_intro_container'>
            <h1 className='section_title'>{props.section_title}</h1>
            <p className='section_intro'>{props.section_intro}</p>
         </div>
    
}

export default BlocSection;