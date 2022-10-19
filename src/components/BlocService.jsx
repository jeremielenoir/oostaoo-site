import React, { useState } from 'react';
import '../assets/Services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

//composant functionnel react
const BlocService = (props) => {

    const { icon, name, explication, explication2} = props;

    const [displayFull, setDisplayFull] = useState(false);

    return (

        <Paper elevation="4" sx={{padding: 2}}>
            <Grid container direction="column">
                <Grid item container justifyContent="center">
                    <FontAwesomeIcon icon={icon} size="4x" transform="down-5" color='' />
                </Grid>
                <Grid item>
                    <h1 className='service_name'>{name}</h1>
                    <p className='service_explication'>{explication}</p>
                    <p className='service_explication'>{explication2}</p>
                    { displayFull && 
                        (<h2>toto</h2>)
                    }
                    <Button onClick={()=> {setDisplayFull(!displayFull)}}>test</Button>
                </Grid>
            </Grid>
        </Paper>

    )
}

BlocService.propTypes = {
    name : PropTypes.string.isRequired,
    icon : PropTypes.node.isRequired,
    explication : PropTypes.string,
    explication2 : PropTypes.string,
}

BlocService.defaultProps = {
    explication2 : null, explication : "Veuillez expliquer"
}

export default BlocService;