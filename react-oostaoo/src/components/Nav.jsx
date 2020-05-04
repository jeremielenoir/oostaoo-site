import React from 'react';
import '../assets/Nav.scss';

function Nav(){
return (
<>
 <nav className='nav'>
    <div className='logo'></div>
    <div className='container_link_menu'>
        <ul className="link_menu">
            <li className='link'><a href='#'>Accueil</a></li>
            <li className='link'><a href='#'>Nos services</a></li>
            <li className='link'><a href='#'>Nos références</a></li>
            <li className='link'><a href='#'>Nos offres d'emploi</a></li>
            <li className='link'><a href='#'>Contact</a></li>
        </ul>
    </div>

 </nav>

</>
);
}


export default Nav;