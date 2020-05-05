import React from 'react';
import '../assets/Header.scss';
import background from '../assets/bg.jpg';


function Header(){

    return (

        <>


    <div className='container'>
        <div className='header'>

            <img src={background} alt="" className='background'/>
            <div className='text'>
                <p className='text_intro'>Trouvez le talent que vous cherchez</p>
            </div>
            
        </div>

  
    </div>
        



        </>
    );
}

export default Header;