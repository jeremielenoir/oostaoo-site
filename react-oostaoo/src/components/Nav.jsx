import React from 'react';
import '../assets/Nav.scss';
import logo from '../assets/logo-oostaoo.png';
import twitter from '../assets/img/twitter.png';
import fb from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';

function Nav(){
return (
<>
<div className='top_nav'>

    <div className='top_nav_contact'>
        <p className='contact_indicator'>Tel: XXXXXXXXXX</p>
        <p className='contact_indicator'>Email: XXXXXX@XXXXXXX</p>
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
            <li className='nav_link'><a href='#' className='link'>Accueil</a></li>
            <li className='nav_link'><a href='#' className='link'>Nos services</a></li>
            <li className='nav_link'><a href='#' className='link'>Nos références</a></li>
            <li className='nav_link'><a href='#' className='link'>Nos offres d'emploi</a></li>
            <li className='nav_link'><a href='#' className='link'>Contact</a></li>
        </ul>
    </div>

 </nav>

</>
);
}


export default Nav;