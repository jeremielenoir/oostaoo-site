import React from 'react';
import '../assets/Nav.scss';
import logo from '../assets/logo-oostaoo.png';
import twitter from '../assets/img/twitter.png';
import fb from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Nav(){
return (
<>
<div className='top_nav'>

    <div className='top_nav_contact'>
        <a href="tel:+330142637727"className='contact_indicator'><FontAwesomeIcon icon={faPhone} size="1x" transform="left-8"/>01 42 63 77 27</a>
        <a href="mailto:contact@oostaoo.com"className='contact_indicator'><FontAwesomeIcon icon={faEnvelope} size="1x" transform="left-8"/>contact@oostaoo.com</a>
    </div>
    <div className='top_nav_sns'>
        <a href="https://www.facebook.com/oostaoo/"><img className='sns' src={fb} alt=""/></a>
        <a href="https://twitter.com/oostaoo?lang=fr"><img className='sns'src={twitter} alt=""/></a>
        <a href="https://www.linkedin.com/company/oostaoo-consulting/"><img className='sns'src={linkedin} alt=""/></a>
    </div>

</div>
 <nav className='nav'>
    <div className='logo'>
        <img className="logo_img" src={logo} alt=""/>
    </div>
    <div className='container_link_menu'>
        <ul className="nav_link_list">
            <li className='nav_link link'>
                <Link activeClass="active"
                to="accueil"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                Accueil
                </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
               Nos services
               </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="technos"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
               Nos technos
               </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="references"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                Nos références
                </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="job"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}>
                Nos offres d'emploi
                </Link>
            </li>
            <li className='nav_link link'>
                <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}>
               Contact
               </Link>

            </li>
        </ul>
    </div>

 </nav>

</>
);
}


export default Nav;