import React from 'react'; 
import logoReferencesDb from './LogoReferencesDb';

const BlocReferences = (props) => {

    

    return <div className='line_references'>
            {logoReferencesDb.map(logo => <img className='ref_img' src={logo.link} alt={logo.name}/> )}
    </div>



}

export default BlocReferences; 