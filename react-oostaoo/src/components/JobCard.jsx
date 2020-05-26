import React from 'react'; 
import '../assets/JobCard.scss';
import JobDb from './JobDb';


const JobCard = (props) => {

    return(


      
        <div className='card'>
            {JobDb.map(({link_img, titre, description}) => (
                <>
                <div className='illustration'>
                <img className='job_img' src={link_img}/>
            </div>
            <div className='text_container'>
                <p className='job_title'> {titre} </p> 
                <p className='job_description'> {description} </p> 

            </div>

                </>
            ))};
            
        </div>

    
    )

}

export default JobCard;