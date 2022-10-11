import React from 'react';
import background from '../assets/bg.jpg';
import '../assets/Header.scss';
import '../assets/Contact.scss';
import ContactForm from './ContactForm';
import pictomail from '../assets/img/pictomail.png';
import pictolieu from '../assets/img/pictolieu.png';
import pictotel from '../assets/img/pictotel.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Contact({id}){

    return (

        <>

            <div className='container'>
                <div className='header'>

                    <img src={background} alt="" className='background'/>
                    <div className='text_header_container'>
                        <p className='header_intro'>Contactez-nous!</p>
                    </div>
            
                </div>

                <div className='main_contact_container' id={id}>
                    <div className='contact_info_container'>
                        <div className='info_line'>
                            <div className="icon">
                                <img src={pictomail} alt="" className='picto'/>
                            </div>
                            <div className='info_text'>
                                <p>contact@oostaoo.com</p>
                            </div>
                        </div>

                        <div className='info_line'>
                            <div className="icon">
                                <img src={pictotel} alt="" className='picto'/>
                            </div>
                            <div className='info_text'>
                                <p>01 42 63 77 27</p>
                            </div>
                        </div>

                        <div className='info_line'>
                            <div className="icon">
                                <img src={pictolieu} alt="" className='picto'/>
                            </div>
                            <div className='info_text'>
                                <p>3 rue Geoffroy-Marie, Paris, 75009</p>
                            </div>
                        </div>


                    </div>

                    <div>
                    

                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        />
                    </div>
                    </Box>        
                    
                    </div>
                    
                    
                    
                
                    
                     
                </div>
            </div>

        </>
    )
}

export default Contact; 