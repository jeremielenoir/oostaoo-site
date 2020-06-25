import React, {Component} from 'react'; 
import Slider from "react-slick";
import '../assets/Carousel.scss';
import BlocSection from './BlocSection';
import JobCard from './JobCard';
import JobDb from './JobDb';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from '../assets/img/next.png';
import back from '../assets/img/back.png';
import axios from 'axios';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "50px" }}
        onClick={onClick}
      ><img src={next} alt="" className="arrow"/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "50px", zIndex:"1"}}
        onClick={onClick}
      ><img src={back} alt="" className="arrow"/></div>
    );
  }

export default class Carousel extends Component {

 
  async componentDidMount() {

    try{
            const jobs = await axios.get("http://3.23.100.240/wp-json/wp/v2/joboffer/", {responseType : "json"})
            console.log('response : ', jobs)
            this.setState({jobs : jobs.data})

    }catch(e){
        console.log(e)
    }

}


  render() {
    const settings = {
      accessibility: true,
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
    };

    return (

    <div className='main_container' id='job'>
        <BlocSection section_title={"Nos offres d'emploi"} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
      <div className='slider_container'>
        
        <Slider {...settings}>
        <div  className="card_container">

            {this.state.jobs.map(job => {

const title = job.title.rendered;
const description = job.acf.job_description;
const lien = job.acf.job_linkedin_url;
const max_length= 250;
console.log('title : ', title);
return(
  <>
    <JobCard key={title} title={title} description={description.substr(0,max_length)+' ...'} lien={lien} />     
    <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, alias, iusto adipisci libero earum magni distinctio deleniti velit recusandae, doloribus provident! Obcaecati eveniet eaque in quis itaque atque qui beatae.</div>
    </>
    );
})}
            
          </div>

          </Slider>
      </div>
      </div>
        
    );
  }
}

