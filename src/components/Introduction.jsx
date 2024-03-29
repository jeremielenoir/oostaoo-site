import React from 'react';
import '../assets/Introduction.scss';

function Introduction(props) {

    const BlocExplication = (props) => {
        return <div className='introduction_sub_container'>
    
        <h1 className='number'>{props.number}</h1>
        <h2 className='column_name'>{props.title}</h2>
        <p className='explication'>{props.explication}</p>
    
    </div>
    }
   
    return (

        <>

    <div className='main_container'>
        <div className='introduction_main_container'> 

            <BlocExplication number={'01'} title={'Talents'} explication={'Dévelopeur expérimenté et polyvalent, acteur responsable majeur des projets qui s’adonne à la coordination et à l’accompagnement de son équipe de dévelopeur à l’aide de ses connaissance technique précises. adipisicing elit. Minima blanditiis ea, quia, magnam ducimus architecto provident quo nulla enim, nemo nihil repellendus tenetur nam. Dolores vero nihil unde quidem quod.'} />
            <BlocExplication number={'02'} title={'Missions'} explication={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima blanditiis ea, quia, magnam ducimus architecto provident quo nulla enim, nemo nihil repellendus tenetur nam. Dolores vero nihil unde quidem quod.'} />
        </div>
    </div>
</>

    );

}


export default Introduction;