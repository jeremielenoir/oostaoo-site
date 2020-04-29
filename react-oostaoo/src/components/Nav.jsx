import React from 'react';
import '../assets/Nav.scss';


function Nav(){
return (
<>
 <nav className='nav'>
    <div className='logo'></div>
    <div className='container_link_menu'>
        <ul className="link_menu">
            <li className='link'>Accueil</li>
            <li className='link'>Nos services</li>
            <li className='link'>Nos références</li>
            <li className='link'>Nos offres d'emploi</li>
            <li className='link'>Contact</li>
        </ul>
    </div>

 </nav>





</>
);
}

export default Nav;