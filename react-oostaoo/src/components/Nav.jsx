import React from 'react';
import '../assets/Nav.scss';

function Nav(){
return (
<>
 <nav className='nav'>
    <div className='logo'></div>
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