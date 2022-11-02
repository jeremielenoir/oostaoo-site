import React from "react";
import '../assets/JobCard.scss';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default ({ title, description, lien, image }) => {

    return (



            <div className='card_container'>
                
                <Grid container spacing={12} direction="row">
                    <Grid item xs={4}>
                        <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                    <Card sx={{ minWidth: 275 }}>
                        </Card>
                    </Grid>
                </Grid>
                
                {/*<div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src={image}/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> {title} </p> 
                        <p className='job_description'> {description} </p> 
                       
                    </div>
                    <a href={lien} target="_blank" className='job_button'>Voir l'annonce</a>
                </div> */}
            </div> 
     
)
}

