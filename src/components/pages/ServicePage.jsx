import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ServicePageImg from "../../images/service.jpg"
import "../../styles/pages/servicepage.css"
import { Link } from 'react-router-dom';
import { categories } from './categoryData';


const ServicePage = () => {
  const images =["https://smartlab-pi.vercel.app/images/background/service-parllax-1-1.png","https://smartlab-pi.vercel.app/images/resources/2.JPG","https://smartlab-pi.vercel.app/images/background/inner-banner-bg-1-1.jpg"]

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current index, looping back to 0 if it exceeds the number of images
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds (adjust the timing as needed)

    return () => {
      // Clear the interval when the component unmounts to avoid memory leaks
      clearInterval(interval);
    };
  });



  useEffect(() => {
    Aos.init();
  },[]);


    return (
      <div className='servicepage'>
        <Navbar />
        <div className='servicepage-img'>
          <img src={ServicePageImg} alt="" />
        </div>
  
        <div className='servicepagec mt-5' >
          <div className='servicepage-content'>
        <h1>
              {Array.from("OUR PRODUCTS").map((letter, index) => (
        <span
          key={index}
          data-aos="fade-right"
          data-aos-delay={index * 100}      >
          {letter}
        </span>
      ))}
              </h1>
          <hr className='w-50'/>
          <p data-aos="fade-right">Where Imagination Meets Interiors
          </p>
          </div>
      
          <div className="card-container mt-5" data-aos="fade-right">
          {categories.map((card)=>(
        <div className="cards" key={card.cid}>

            <Link to={`/categorypage/${card.cid}`}>
            <img src={card.cardImg} alt="F.jpeg" className="model-picture"/>
            <h2 className="type">{card.name}</h2>
            <p className="card-description">{card.cardDesc}</p>
            </Link>


            <div className="shopping-container">
            <Link to={`/categorypage/${card.cid}`}>
            <button className='btn btn-outline-dark' >{card.button}</button>
            </Link>
            </div>
        </div>
        ))}
        </div>
   
        </div>
        <Footer/>      
      </div>
    )
  }

export default ServicePage