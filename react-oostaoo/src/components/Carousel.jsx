import React, {Component} from 'react'; 
import '../assets/Carousel.scss';
import BlocSection from './BlocSection';
import JobCard from './JobCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 

import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }

export default class Carousel extends Component {
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
      prevArrow: <SamplePrevArrow />
    };
    return (

    <div className='main_container'>
        <BlocSection section_title={"Nos offres d'emploi"} section_intro={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi alias iste ducimus tenetur saepe reprehenderit quasi reiciendis ab architecto.'} />
      <div className='slider_container'>
        
        <Slider {...settings}>
          <div>
            <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>

          <div>
          <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>

          <div>
          <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>

          <div>
          <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>

          <div>
            <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>

          <div>
            <div className='card_container'>
                <div className='card'>
                    <div className='illustration'>
                        <img className='job_img' src='https://via.placeholder.com/350x200'/>
                    </div>
                    <div className='text_container'>
                        <p className='job_title'> Dev react  </p> 
                        <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                    </div>
                    <button>voir annonce</button>
                </div>
            </div>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <div className='card_container'>
                <div className='illustration'>
                    <img className='job_img' src='https://via.placeholder.com/350x200'/>
                </div>
                <div className='text_container'>
                    <p className='job_title'> Dev react  </p> 
                    <p className='job_description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolorum nisi veritatis deserunt. Tempora amet ullam quod quasi temporibus impedit laudantium, cupiditate distinctio aperiam exercitationem soluta quidem quam cumque explicabo? </p> 
                </div>
            </div>
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

