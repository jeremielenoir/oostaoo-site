import React from 'react';
import '../assets/Nav.scss';
import logo from '../assets/logo-oostaoo.png';
import twitter from '../assets/img/twitter.png';
import fb from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav(){
return (
<>
<div className='top_nav'>

    <div className='top_nav_contact'>
        <p className='contact_indicator'>Tel: 01 42 63 77 27</p>
        <p className='contact_indicator'>Email: contact@oostaoo.com</p>
    </div>
    <div className='top_nav_sns'>
        <a href=""><img className='sns' src={fb} alt=""/></a>
        <a href=""><img className='sns'src={twitter} alt=""/></a>
        <a href=""><img className='sns'src={linkedin} alt=""/></a>
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
                offset={-70}
                duration={500}>
                Accueil
                </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
               Nos services
               </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="technos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
               Nos technos
               </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="references"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Nos références
                </Link>
            </li>
            <li className='nav_link link'>
            <Link activeClass="active"
                to="job"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                Nos offres d'emploi
                </Link>
            </li>
            <li className='nav_link link'>
                <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
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