import React, { useState } from 'react';
import '../assets/Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

//composant functionnel react
const BlocService = ({ icon, name, explication, explication2 }) => {

 return (

        <Paper elevation="4" sx={{ padding: 2 }}>
            <Grid container direction="column">
                <Grid item container justifyContent="center">
                    <FontAwesomeIcon icon={icon} size="4x" transform="down-5" color='' />
                </Grid>
                <Grid item>
                    <h1 className='service_name'>{name}</h1>
                    <p className='service_explication'>{explication}</p>
                    <p className='service_explication'>{explication2}</p>
                </Grid>
            </Grid>
        </Paper>

    )
}


export default BlocService;