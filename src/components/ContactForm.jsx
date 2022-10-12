import React from 'react';
import '../assets/ContactForm.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name]: val });
    }


    handleSubmit(event) {
        alert('Votre message a été envoyé');
        event.preventDefault();
    }


    render() {
        return (

            
                <Grid spacing={2}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch">
                    <Grid item xs={6}>
                        <TextField fullWidth id="outlined-basic" label="Nom et Prénom" placeholder="NOM Prénom" variant="outlined" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="outlined-basic" label="E-mail" placeholder="Exemple@email.fr" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Nous contacter"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="contained" endIcon={<SendIcon />}>Envoyer</Button>

                    </Grid>
                </Grid>
            

    )}
}

export default ContactForm;