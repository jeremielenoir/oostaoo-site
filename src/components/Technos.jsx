import React from 'react';
import '../assets/Section.scss';
import '../assets/Technos.scss';
import BlocSection from './BlocSection';
import BlocTechnos from './BlocTechnos';


function Technos({id}) {

   

    return (

        <div className='main_container'>
            <div className='section_container' id={id}>
                <BlocSection section_title={'Nos Technos'} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                <div className='techno_container'>
                <BlocTechnos/>
                
                </div>
            </div>
            

            
        </div>

       



    )

}

export default Technos; 