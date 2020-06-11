import React, {Component} from "react";
import '../assets/JobCard.scss';



const JobCard = ({link_img, titre, description}) =>   
        
            <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src={link_img}/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> {titre} </p> 
                        <p className='job_description'> {description} </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
     

export default JobCard;