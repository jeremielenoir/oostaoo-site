import React from 'react';
import background from '../assets/bg.jpg';
import '../assets/Header.scss';
import '../assets/Contact.scss';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import Grid from '@mui/material/Grid';


function Contact({ id }) {

    return (
        <>
            <div className='container'>

                <div className='header' id={id}>
                    <img src={background} alt="" className='background' />
                    <div className='text_header_container'>
                        <p className='header_intro'>Contactez-nous!</p>
                    </div>
                </div>
            </div>

            
            <Grid container spacing={2} sx={{ padding: 2 }}>
                <Grid item xs={4}>
                    <ContactInformation />
                </Grid>

                <Grid item xs={8}>
                    <ContactForm />
                </Grid>
            </Grid>
            
        </>

    )
}

export default Contact; 