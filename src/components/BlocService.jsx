import React, {useState} from 'react';
import '../assets/Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const BlocService = (props) => 
{
    return (
        <div className='service_card_container'>
        <div className='service_sub_container'>
            <FontAwesomeIcon icon={props.icon} size="4x" transform="down-5"/>
            <h1 className='service_name'>{props.name}</h1>
            <p className='service_explication'>{props.explication}</p>
            <p className='service_explication'>{props.explication2}</p>
        </div>
        </div>
    )
}


export default BlocService;