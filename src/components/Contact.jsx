import React from 'react';
import background from '../assets/bg.jpg';
import '../assets/Header.scss';
import '../assets/Contact.scss';
import ContactForm from './ContactForm';
import pictomail from '../assets/img/pictomail.png';
import pictolieu from '../assets/img/pictolieu.png';
import pictotel from '../assets/img/pictotel.png';

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

                    <div className='contact_container'>

                        <ContactForm/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact; 