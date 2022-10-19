import React from 'react';
import '../assets/Nav.scss';
import logo from '../assets/logo-oostaoo.png';
import twitter from '../assets/img/twitter.png';
import fb from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
import {Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Nav() {
    const [displayFull, setDisplayFull] = useState('accueil');

    const menu =[{id:'accueil', title:'Accueil'}];

    

    return (
        <>
            <div className='top_nav'>

                <div className='top_nav_contact'>
                    <a href="tel:+330142637727" className='contact_indicator' underline="hover"><FontAwesomeIcon icon={faPhone} size="1x" transform="left-8" />01 42 63 77 27</a>
                    <a href="mailto:contact@oostaoo.com" className='contact_indicator' underline="hover"><FontAwesomeIcon icon={faEnvelope} size="1x" transform="left-8" />contact@oostaoo.com</a>
                </div>
                <div className='top_nav_sns'>
                    <a href="https://www.facebook.com/oostaoo/"><img className='sns' src={fb} alt="" /></a>
                    <a href="https://twitter.com/oostaoo?lang=fr"><img className='sns' src={twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/company/oostaoo-consulting/"><img className='sns' src={linkedin} alt="" /></a>
                </div>

            </div>
            <nav className='nav' >
                <div className='logo'>
                    <img className="logo_img" src={logo} alt="" />
                </div>



                <div className='container_link_menu'>
                    <ul className="nav_link_list">
                        
                        <li className='link'>
                            <Link activeClass="active"
                                to={'accueil'}
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-100}
                                duration={500}
                                onSetActive={() => setDisplayFull('accueil')}
                                >
                                <Button variant={ displayFull === 'accueil' ? 'contained' : ''} onClick={()=> {setDisplayFull('accueil')}}>Accueil</Button>
                            </Link>
                        </li>
                        <li className='link'>
                            <Link 
                                to={'services'}
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-100}
                                duration={500}
                                onSetActive={() => setDisplayFull('services')}
                                >
                                <Button variant={displayFull === 'services' ? 'contained' : ''} onClick={()=> {setDisplayFull('services')}}>Services</Button>
                            </Link>
                        </li>
                        <li className='link'>
                            <Link 
                                to="technos"
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-100}
                                duration={500}
                                onSetActive={() => setDisplayFull('Technos')}
                                >
                                <Button variant={displayFull === 'Technos' ? 'contained' : ''} onClick={() => {setDisplayFull('Technos')}}>Technos</Button>
                            </Link>
                        </li>
                        <li className='nav_link link'>
                            <Link 
                                to="references"
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-100}
                                duration={500}
                                onSetActive={() => setDisplayFull('references')}
                                >
                                <Button variant={displayFull === 'references' ? 'contained' : ''} onClick={()=> {setDisplayFull('references')}}>References</Button>
                            </Link>
                        </li>
                        <li className='nav_link link'>
                            <Link 
                                to="job"
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-130}
                                duration={500}
                                onSetActive={() => setDisplayFull('Offres')}>
                                <Button variant={ displayFull === 'Offres' ? 'contained' : ''} onClick={()=> {setDisplayFull('Offres')}}>Offres</Button>
                            </Link>
                        </li>
                        <li className='nav_link link'>
                            <Link 
                                to="contact"
                                spy
                                spyThrottle={600}
                                smooth
                                offset={-150}
                                duration={500}
                                onSetActive={() => setDisplayFull('Contact')}>
                                <Button variant={ displayFull === 'Contact' ? 'contained' : ''} onClick={()=> {setDisplayFull('Contact')}}>Contact</Button>
                            </Link>

                        </li>
                    </ul>
                </div>

            </nav>

        </>
    );
}


export default Nav;