import React from "react";
import '../assets/JobCard.scss';



export default({title, description,lien, image})=>{

return(
        
            <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src={image}/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> {title} </p> 
                        <p className='job_description'> {description} </p> 
                       
                    </div>
                    <a href={lien} target="_blank" className='job_button'>Voir l'annonce</a>
                </div>
            </div>
     
)}

