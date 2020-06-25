import React, {Component, useState, useEffect} from 'react'; 
import JobCard from './JobCard';
import BlocSection from './BlocSection';
import axios from 'axios';
import '../assets/Carousel.scss';
import next from '../assets/img/next.png';
import back from '../assets/img/back.png';



export default class CarouselNew extends Component {

    constructor(props) {
    super(props);
    this.state ={
        jobs : [],
        position : 0,
        screenWidth: null
    };
}
  
   async componentDidMount() {

        try{
                const jobs = await axios.get("https://ojobo.deepupteam.com/wp-json/wp/v2/joboffer", {responseType : "json"})
                console.log('response : ', jobs)
                this.setState({jobs : jobs.data})
                window.addEventListener("resize", this.resize.bind(this));
                this.resize();
                
    
        }catch(e){
            console.log(e)
        }
    
  }


    resize() {
        this.setState({screenWidth: window.innerWidth});
        console.log('screen :', this.state.screenWidth)
    }


  

   changePositionNext(){
       
        {this.state.position < this.state.jobs.length-3 && this.state.screenWidth > 769 ? (this.setState({position : this.state.position +3})) 
        : this.state.position < this.state.jobs.length-1 && this.state.screenWidth < 769 ? (this.setState({position : this.state.position +1}))
        : (this.setState({position : 0})) }
           
}
    
    changePositionPrev(){
        {this.state.position == 0 && this.state.screenWidth > 769 ? (this.setState({position : this.state.jobs.length-3}))
        : this.state.position == 0 && this.state.screenWidth < 769 ? (this.setState({position : this.state.jobs.length-1}))
        : this.state.position != 0 && this.state.screenWidth < 769 ? (this.setState({position : this.state.position -1}))
        : (this.setState({position :  this.state.position -3})) }
    
}



    render(){
        let selected = [];
        
       selected = this.state.jobs.length > 0 && this.state.screenWidth > 769 ? this.state.jobs.slice(this.state.position, this.state.position +3) : this.state.jobs.slice(this.state.position, this.state.position+1)

        console.log('position : ', this.state.position);
        console.log('selected : ', selected);
        
        
        return(
            <div className='main_container' id='job'>
                <BlocSection section_title={"Nos offres d'emploi"} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                <div className='slider_container'>
                    <div onClick={() => this.changePositionPrev()} className="arrow_container"><img src={back} alt="" className="arrow"/></div>
                    
                    {this.state.screenWidth > 769 && this.state.position === this.state.jobs.length-2 || this.state.position === this.state.jobs.length-1 && this.state.jobs.length %3 != 0 ? (this.setState({position : this.state.jobs.length-3})) : null}

                    {this.state.screenWidth > 769 && this.state.position === -2 || this.state.position === -1 && this.state.jobs.length %3 != 0 ? (this.setState({position : 0})) : null}

                    <div  className="card_container">

                        {selected.map(job =>{
                            const title = job.title.rendered;
                            const description = job.acf.job_description;
                            const lien = job.acf.job_linkedin_url;
                            const image = job.acf.job_image ;
                            const max_length= 250;
                            console.log('title : ', title);
                            return(
                                <JobCard key={title} title={title} description={description.substr(0,max_length)+' ...'} lien={lien} image={image}/>     
                                );
                            })}

                    </div>

                   

                    <div onClick={() => this.changePositionNext()} className="arrow_container"><img src={next} alt="" className="arrow"/></div>
                    
                </div>      
                
            </div>
            
        )

        

}
}
