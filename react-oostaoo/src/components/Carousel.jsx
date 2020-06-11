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

  state={
    infoCard :[],
  };



componentDidMount(){

  this.setState({
    infoCard: JobDb
 });
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
          <div>

            {this.state.infoCard.map((element,index) => {
              return(
              <p>Hello</p>
                // <JobCard key={index} link_img={element.link_img} titre={element.titre} description={element.description}/>
              )
            })}
            
          </div>

          </Slider>
      </div>
      </div>
        
    );
  }
}

