import React from 'react';
import '../assets/Header.scss';
import background from '../assets/bg.jpg';


function Header(){

    return (

        <>


        <div className='header'>

            <img src={background} alt="" className='background'/>
            <div className='text'>
                <p className='text_intro'>Trouvez le talent que vous cherchez</p>
            </div>
            
        </div>

  

        <div className='introduction_main_container'> 

            <article className='introduction_sub_container'>

                <h1 className='number'>01</h1>
                
            </article>
            <article className='introduction_sub_container'>

                <h1 className='number'>02</h1>
                
            </article>
            <article className='introduction_sub_container'>

                <h1 className='number'>03</h1>
                
            </article>


            
        
        
        
        </div>

       

       



        </>
    );
}

export default Home;