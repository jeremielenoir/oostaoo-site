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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


function OffreJob({titre, soustitre, description, image, nom,}) { 

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })
        (({ theme, expand }) => ({
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        }));

    
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        };

        return (

            
            <Card sx={{ minWidth: 275 }}>
                <CardHeader avatar={

                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <WorkOutlineIcon />
                    </Avatar>
                }
                    title={<Typography variant="h5">{titre}</Typography>}
                    subheader={<Typography sx={{ color: 'green', fontSize: 13 }}>{soustitre}</Typography>}
                />
                <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt={nom}
                />
                <CardContent>
                    <Typography >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="Voir sur Linkedin" arrow >
                        <IconButton aria-label="Voir sur Linkedin">
                            <LinkedInIcon color='secondary' fontSize='large' />
                        </IconButton>
                    </Tooltip>

                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>

                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph></Typography>
                        <Typography paragraph>
                            En 1989, il signe les costumes de la première tournée de Mylène Farmer, et collabore à nouveau avec la chanteuse dans les années 1990 pour certains de ses clips (XXL, Souviens-toi du jour…)10.
                        </Typography>

                    </CardContent>
                </Collapse>
            </Card>
                
        )
    }

    export default OffreJob;