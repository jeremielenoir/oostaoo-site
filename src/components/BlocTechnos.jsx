import React from 'react'; 
import logoTechnosDb from './LogoTechnosDb';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const BlocTechnos = (props) => {

 
    return <div className='line_techno'>
            
            {logoTechnosDb.map(logo => <Tooltip colors='Primary' title={logo.name} placement="left">
                                        <img className='techno_img' key={logo.name} src={logo.link} alt={logo.name}/>
                                        </Tooltip>)}
            
    </div>

}

export default BlocTechnos; 