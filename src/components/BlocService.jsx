import React, { useState } from 'react';
import '../assets/Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const BlocService = (props) => {
    return (

        <Paper elevation="4">
            <Grid container direction="column">
                <Grid item container justifyContent="center">
                    <FontAwesomeIcon icon={props.icon} size="4x" transform="down-5" color='' />
                </Grid>
                <Grid item>
                    <h1 className='service_name'>{props.name}</h1>
                    <p className='service_explication'>{props.explication}</p>
                    <p className='service_explication'>{props.explication2}</p>
                </Grid>
            </Grid>
        </Paper>

    )
}


export default BlocService;