import React, { useEffect, useState } from 'react';
import '../styles/services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';





const Services = () => {

    const images =["https://smartlab-pi.vercel.app/images/resources/2.JPG","https://smartlab-pi.vercel.app/images/services/08.jpg","https://smartlab-pi.vercel.app/images/background/inner-banner-bg-1-1.jpg"]
    const texts = ["Our laboratory furniture solutions are engineered for precision and functionality. Whether in industrial, educational, or healthcare settings, we deliver durable and customized laboratory furniture to meet your specific requirements.",
     "Elevate your workspace with our expertly crafted office furniture. From ergonomic seating to stylish workstations, we offer a comprehensive range of office furniture solutions designed to enhance productivity and aesthetics",
      "Our passion for interior design shines through in every project we undertake. With a keen eye for detail and a commitment to excellence, we transform spaces into inspiring environments that reflect your unique vision."];
    const heads=["LABORATORY FURNITURES","OFFICE FURNITURES","INTERIOR WORKS"]
    const types=["Educational | Industrial | Health care","",""]


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
  }, [currentIndex]);



  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="services">
      <div className="service-heading me-5">
        <h2>
          {Array.from('SERVICES').map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
        <hr className="w-25" />
        <h1 className=''>
          {Array.from('OUR SPECIALIZATION').map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <div className="service-slideshow">
      <div className='slideshow-img'>
      <img data-aos="fade-right" data-aos-delay={500} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>


      <div className='slideshow-content'>
      <h3 data-aos="fade-right"  data-aos-delay={500}>{heads[currentIndex]}</h3>
      <h5 data-aos="fade-right"  data-aos-delay={500}>{types[currentIndex]}</h5>
      <p className='text-dark' data-aos="fade-right"  data-aos-delay={500}>{texts[currentIndex]}</p>
      </div>
      <div className='slideshow-img2'>
      <img data-aos="fade-right" data-aos-delay={500} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
    </div>


    </div>
  );
};

export default Services;
