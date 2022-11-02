import React, { Component } from 'react';
import JobCard from './JobCard';
import BlocSection from './BlocSection';
import axios from 'axios';
import '../assets/Carousel.scss';
import next from '../assets/img/next.png';
import back from '../assets/img/back.png';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip'
import OffreJob from './OffreJob';

function ListeJob({ id }) {

  
        return (

            <>
                <div className='main_container' id='job'>
                    <BlocSection section_title={"Nos offres d'emploi"} section_intro={'tout cracheux ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                    <div className='slider_container'>




                        <div className="card_container">



                            <Grid container spacing={12}  direction="row">
                                <Grid item xs={4}>
                                    <OffreJob titre='Dev lead' soustitre='Disponible' image='../assets/logo/iOS.png' nom='ios' description='Nous proposons une offre demploie chez Mugler, Dans les années 1980 et 1990, Thierry Mugler acquiert une renommée internationale et ses collections rencontrent un succès commercial'/>
                                </Grid>
                                <Grid item xs={4}>
                                    <OffreJob titre='Dev lead' soustitre='Disponible' image='../assets/references/mugler.png' nom='mugler' description='MUgler MUgler MUgler MUgler MUgler MUgler'/>
                                </Grid>
                                <Grid item xs={4}>
                                    <OffreJob titre='Dev lead' soustitre='Disponible' image='../assets/logo/react.png' nom='React' description='MUgler MUgler MUgler MUgler MUgler MUgler'/>
                                </Grid>
                            </Grid>

                           
                        </div>




                    </div>

                </div>

            </>

        )



    }

    export default ListeJob;