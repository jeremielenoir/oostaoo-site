import React from 'react';
import '../assets/Section.scss';
import '../assets/Technos.scss';
import BlocSection from './BlocSection';
import BlocTechnos from './BlocTechnos';



function Technos() {

   

    return (

        <div className='main_container'>
            <div className='section_container'>
                <BlocSection section_title={'Nos Technos'} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                <div className='techno_container'>
                <BlocTechnos urlImg_1={'https://picsum.photos/id/22/100/100'} urlImg_2={'https://picsum.photos/id/19/100/100'} urlImg_3={'https://via.placeholder.com/100'} urlImg_4={'https://via.placeholder.com/100'} urlImg_5={'https://via.placeholder.com/100'} urlImg_6={'https://via.placeholder.com/100'}/>
                <BlocTechnos urlImg_1={'https://picsum.photos/100'} urlImg_2={'https://picsum.photos/id/1/100/100'} urlImg_3={'https://via.placeholder.com/100'} urlImg_4={'https://via.placeholder.com/100'} urlImg_5={'https://via.placeholder.com/100'} urlImg_6={'https://via.placeholder.com/100'}/>
                <BlocTechnos urlImg_1={'https://picsum.photos/100'} urlImg_2={'https://picsum.photos/id/8/100/100'} urlImg_3={'https://via.placeholder.com/100'} urlImg_4={'https://via.placeholder.com/100'} urlImg_5={'https://via.placeholder.com/100'} urlImg_6={'https://via.placeholder.com/100'}/>

                </div>
            </div>
            

            
        </div>

       



    )

}

export default Technos; 