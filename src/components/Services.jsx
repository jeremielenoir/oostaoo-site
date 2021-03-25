import React from 'react';
import '../assets/Section.scss';
import '../assets/Services.scss';
import BlocService from './BlocService';
import BlocSection from './BlocSection';


function Services({id}){

   

  
    return (

        <>
        <div className='main_container'>
            <div className='section_container' id={id}>

                <BlocSection section_title={'Nos Services'} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />

                <div className='service_container'>
                    <BlocService name={'Lead developper'} explication={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} more={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'}/>
                    <BlocService name={'Architectes Front-end'} explication={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} more={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                    <BlocService name={'Développeur Front/Web'} explication={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} more={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'}/>
                </div>
            </div>
        </div>

        </>

    );
}

export default Services;