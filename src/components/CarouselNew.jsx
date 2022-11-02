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




export default class CarouselNew extends Component {
    
    
    

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            position: 0,
            screenWidth: null,
        };
    }

    async componentDidMount() {

        try {
            const jobs = await axios.get("/wp-json/wp/v2/joboffer", { responseType: "json" })
            console.log('response : ', jobs)
            this.setState({ jobs: jobs.data })
            window.addEventListener("resize", this.resize.bind(this));
            this.resize();

        } catch (e) {
            console.log(e)
        }

    }


    resize() {
        this.setState({ screenWidth: window.innerWidth });
        console.log('screen :', this.state.screenWidth)
    }




    changePositionNext() {

        {
            this.state.position < this.state.jobs.length - 3 && this.state.screenWidth > 769 ? (this.setState({ position: this.state.position + 3 }))
                : this.state.position < this.state.jobs.length - 1 && this.state.screenWidth < 769 ? (this.setState({ position: this.state.position + 1 }))
                    : (this.setState({ position: 0 }))
        }

    }

    changePositionPrev() {
        {
            this.state.position === 0 && this.state.screenWidth > 769 ? (this.setState({ position: this.state.jobs.length - 3 }))
                : this.state.position === 0 && this.state.screenWidth < 769 ? (this.setState({ position: this.state.jobs.length - 1 }))
                    : this.state.position !== 0 && this.state.screenWidth < 769 ? (this.setState({ position: this.state.position - 1 }))
                        : (this.setState({ position: this.state.position - 3 }))
        }

    }

   
    render() {
        
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



        let selected = [];
        selected = this.state.jobs.length > 0 && this.state.screenWidth > 769 ? this.state.jobs.slice(this.state.position, this.state.position + 3) : this.state.jobs.slice(this.state.position, this.state.position + 1)

        // console.log('position : ', this.state.position);
        // console.log('selected : ', selected);
        
        

        return (
            
            

            

            <div className='main_container' id='job'>
                <BlocSection section_title={"Nos offres d'emploi"} section_intro={'tout cracheux ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                <div className='slider_container'>
                    

                    

                    <div className="card_container">
                    
                    
    
                        <Grid container spacing={12} direction="row">
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardHeader avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            J
                                        </Avatar>
                                    }
                                        title={<Typography variant="h5">Dev front-end</Typography>}
                                        subheader={<Typography sx={{ color: 'green', fontSize: 13 }}>Disponible</Typography>}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image="../assets/references/mugler.png"
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <Typography >
                                            Nous proposons une offre d'emploie chez Mugler, Dans les années 1980 et 1990, Thierry Mugler acquiert une renommée internationale et ses collections rencontrent un succès commercial
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        {/* <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>*/}

                                    </CardActions>
                                    {/*<Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography paragraph> Method: </Typography>
                                            <Typography paragraph>
                                                En 1989, il signe les costumes de la première tournée de Mylène Farmer, et collabore à nouveau avec la chanteuse dans les années 1990 pour certains de ses clips (XXL, Souviens-toi du jour…)10. Il refuse de réaliser les costumes du film Cotton Club de Francis Ford Coppola ou encore ceux de Michael Jackson pour sa tournée Dangerous, tout comme les propositions de Madonna ou encore de Bernard Arnault, lequel lui aurait proposé de reprendre Dior
                                            </Typography>
                                            <Typography paragraph>
                                                En 1994, il joue son propre rôle, aux côtés notamment d'autres stylistes et grand couturiers, dans le film Prêt-à-porter de Robert Altman.
                                                En 1997, l'entreprise Thierry Mugler est rachetée par le groupe Clarins12. Après des pertes de plusieurs millions d'euros, Clarins ferme la partie « couture » de la marque en 200313,14. D’autres stylistes vont ainsi œuvrer pour les collections de prêt-à-porter et les accessoires de la marque          </Typography>
                                            <Typography paragraph>

                                            </Typography>
                                        </CardContent>
                                </Collapse>*/}
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                J
                                            </Avatar>}
                                        title="Dev front-end"
                                        subheader="Disponible"

                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardHeader

                                        title="Dev front-end"
                                        subheader={<Typography sx={{ color: 'red', }}>Non disponible</Typography>}

                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Word of the Day
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        {/*{selected.map(job =>{
                            const title = job.title.rendered;
                            const description = job.acf.job_description;
                            const lien = job.acf.job_linkedin_url;
                            const image = job.acf.job_image ;
                            const max_char = 250;
                            
                            // console.log('title : ', title);
                            // console.log('max char : ', max_char)
                            return(
                                <JobCard key={title} title={title} description={description.substr(0,max_char)+' ...'} lien={lien} image={image}/>     
                                );
                            })}*/}

                    </div>



                    
                </div>

            </div>

        )



    }
}
