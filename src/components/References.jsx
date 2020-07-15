import React from 'react';
import '../assets/Section.scss';
import '../assets/References.scss';
import BlocSection from './BlocSection';
import BlocReferences from './BlocReferences';

function References({id}){

    return(

        <>
        <div className='main_container'>
            <div className='section_container' id={id}>

                <BlocSection section_title={'Nos Références'} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />

                <div className='references_container'>
                    <BlocReferences/>
                </div>
            </div>
        </div>

        </>

    )



}

export default References;