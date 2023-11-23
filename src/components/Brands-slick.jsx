import React, { useEffect } from 'react'
import Slider from "react-slick";
import Brand1 from "../images/Brands/1.png"
import Brand2 from "../images/Brands/2.png"
import Brand3 from "../images/Brands/3.png"
import Brand4 from "../images/Brands/4.jpg"
import Brand5 from "../images/Brands/5.png"
import Brand6 from "../images/Brands/6.png"
import Brand7 from "../images/Brands/7.png"
import Brand8 from "../images/Brands/8.png"
import Brand9 from "../images/Brands/9.jpg"
import Brand10 from "../images/Brands/10.png"
import Brand11 from "../images/Brands/12.png"
import Brand12 from "../images/Brands/13.png"
import Brand13 from "../images/Brands/14.jpg"
import Brand14 from "../images/Brands/15.png"
import "../styles/brands-slick.css"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Brandslick = () => {

    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed:1000,
        autoplaySpeed:1000,
        pauseOnHover: true,
        nextArrow:false,
        prevArrow: false,
        rtl:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

      useEffect(() => {
        AOS.init();
      }, []);

  return (

<div className='brandslider mt-5'>
<div className='brandslick-heading'>
          <h2>
          {Array.from(`OUR BRANDS`).map((letter, index) => (
            <span key={index} data-AOS="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
      </div>

    
    <div className='brands-slick d-flex justify-content-center align-items-center'>

      

    <Slider {...settings} className='slider'>
      <div className='brands-box'>
        <img src={Brand1}  alt="" />
      </div>
      <div className='brands-box '>
      <img src={Brand2}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand3}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand4}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand5}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand6}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand7}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand8}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand9}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand10}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand11}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand12}  alt="" />
      </div>
      <div className='brands-box'> 
      <img src={Brand13}  alt="" />
      </div>
      <div className='brands-box'>
      <img src={Brand14}  alt="" />
      </div>
    </Slider>
  </div>
  </div>

  )
}

export default Brandslick