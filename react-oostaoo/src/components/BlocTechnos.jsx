import React from 'react'; 
import logoTechnosDb from './LogoTechnosDb';


const BlocTechnos = (props) => {

    
    return <div className='line_techno'>
            {logoTechnosDb.map(logo => <img className='techno_img' src={logo.link} alt={logo.name}/> )}
    </div>

}

export default BlocTechnos; 