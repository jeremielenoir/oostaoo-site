import React from 'react';
import '../assets/Header.scss';
import background from '../assets/bg.jpg';


function Header({id}){

    return (

        <>


    <div className='container' id={id}>
        <div className='header'>

            <img src={background} alt="" className='background'/>
            <div className='text_header_container'>
                <p className='header_intro'>Trouvez le talent que vous cherchez</p>
            </div>
            
        </div>

  
    </div>
        



        </>
    );
}

export default Header;