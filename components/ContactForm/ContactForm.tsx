import styles from "./ContactForm.module.css";

import { FormControl, InputLabel, Input, FormHelperText, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";

const ContactForm = () => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <section>
            <FormControl onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="Nom et Prénom" 
                    variant="outlined" 
                    placeholder="Doe John" 
                    value={fullname} 
                    onChange={(e) => setFullname(e.target.value)} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    placeholder="exemple@mail.fr" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField 
                    id="outlined-basic" 
                    label="Nous Contacter" 
                    variant="outlined" 
                    placeholder="Bonjour, je souhaiterais prendre contact..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                />
                <Button variant="contained" endIcon={<SendIcon />}>Envoyer</Button>
            </FormControl>
        </section>
    );
}

export default ContactForm;