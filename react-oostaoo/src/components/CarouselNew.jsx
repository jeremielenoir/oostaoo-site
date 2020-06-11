import React, {Component} from 'react'; 
import JobCard from './JobCard';
import JobDb from './JobDb';
import BlocSection from './BlocSection';
import '../assets/Carousel.scss';
import next from '../assets/img/next.png';
import back from '../assets/img/back.png';


export default class CarouselNew extends Component {

    constructor(props) {
    super(props);
    this.state ={
        jobs : JobDb,
        position : 0
    };
}

    
    changePositionNext = () => {
        {this.state.position < this.state.jobs.length-3 ? (this.setState({position : this.state.position +3})) : (this.setState({position : 0})) }
           
}

    
    changePositionPrev = () => {
        {this.state.position == 0 ? (this.setState({position : this.state.jobs.length-3})) : (this.setState({position :  this.state.position -3})) }
}
    
    render(){
        
        let selected = this.state.jobs.slice(this.state.position, this.state.position +3)

        console.log('position : ', this.state.position);
        
        return(
            <div className='main_container' id='job'>
                <BlocSection section_title={"Nos offres d'emploi"} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
                <div className='slider_container'>
                    <div onClick={this.changePositionPrev} className="arrow_container"><img src={back} alt="" className="arrow"/></div>
                    
                    {this.state.position == this.state.jobs.length-2 || this.state.position == this.state.jobs.length-1 && this.state.jobs.length %3 != 0 ? (this.setState({position : this.state.jobs.length-3})) : null}

                    {this.state.position == -2 || this.state.position == -1 && this.state.jobs.length %3 != 0 ? (this.setState({position : 0})) : null}
                    
                {selected.map((element) =>{
                    return(
                           <JobCard link_img={element.link_img} titre={element.titre} description={element.description} />     
                           )
                    })}

                   

                    <div onClick={this.changePositionNext} className="arrow_container"><img src={next} alt="" className="arrow"/></div>
                    
                </div>      
                
            </div>
            
        )

        

}
}
