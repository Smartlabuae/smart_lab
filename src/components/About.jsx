import React, { useEffect, useState } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import smart from "../images/Logo.jpg";
import one from "../images/lab/01.webp";
import two from "../images/lab/02.webp";
import three from "../images/lab/03.webp";
import four from "../images/lab/04.webp";
import five from "../images/lab/05.webp";
import six from "../images/lab/06.webp";
import seven from "../images/lab/07.webp";
import eight from "../images/lab/08.webp";
const About = () => {
  // Define an array of image sources
  const blueImages = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    // Add more image sources here as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to switch to the next image
  const switchToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % blueImages.length);
  };

  useEffect(() => {
    AOS.init();

    // Automatically switch to the next image every few seconds
    const imageRotationInterval = setInterval(switchToNextImage, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(imageRotationInterval);
    };
  }, [currentImageIndex]);

  return (
    <div className="about mt-1">
      <div className="logo-about" data-aos="fade-right">
        {/* <div className='blue'>
          <img src={blueImages[currentImageIndex]}  alt="" />
        </div> */}
        <img className="logo-about-img" src={smart} alt="" />
        {/* <div className='blue'>
          <img src={blueImages[(currentImageIndex + 1) % blueImages.length]} alt="" />
        </div> */}
      </div>
      <div className="about-elements">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="about-content ms-2 mb-2"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="about-heading"
          >
            <h1>
              {Array.from("Welcome to Smart Lab").map((letter, index) => (
                <span
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
          <hr className="" />
          <p className="text-dark">
            Smart Laboratory Furniture and Decor LLC is a leading interior
            design firm based in the UAE. We specialize in creating innovative
            and captivating interior spaces for offices, educational
            institutions, residences, and commercial establishments. With a
            focus on excellence, we offer top-notch services in laboratory
            furniture manufacturing across industrial, educational, and
            healthcare sectors. Our dedicated and diligent team is committed to
            delivering projects on time, while providing tailored design
            solutions that align with your budget.
          </p>
          {/* <div data-aos="fade-left" data-aos-duration="2000"  className='about-btn mb-5 d-flex justify-content-center'>
          <button className='btn btn-outline-dark'>Contact Us</button></div> */}
        </div>
      </div>
      
  
    </div>
  );
};

export default About;
