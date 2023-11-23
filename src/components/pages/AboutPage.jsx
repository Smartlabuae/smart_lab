import React, { useEffect, useState } from 'react'
import "../../styles/pages/aboutpage.css"
import aboutPageImg from "../../images/about.jpg"



import Navbar from '../Navbar'
import Footer from '../Footer'
import Aos from 'aos'
import Legacy from '../Legacy'


const AboutPage = () => {

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
  }, [currentIndex]);



  useEffect(() => {
    Aos.init();
  },[]);


  return (
    <div className='aboutpage'>
      <Navbar />
      <div className='aboutpage-img'>
        <img src={aboutPageImg} alt="" />
      </div>

      <div className='aboutpagec mt-5' >
        <div className='aboutpage-content'>
      <h1>
            {Array.from("WHO WE ARE").map((letter, index) => (
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

        <div className='aboutpage-slideshow mt-1'>
      <img data-aos="fade-right" data-aos-delay={500} src={images[currentIndex]} alt={`Images ${currentIndex + 1}`} />
      </div>

      </div>

      <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para container'>
        <h1>Our Story</h1>
        <p className='text-dark '>
        Smart Laboratory Furniture and Decor LLC is a prominent interior design firm based in the UAE,
         specializing in crafting innovative and captivating interiors for a diverse range of spaces, including offices,
          educational institutions, residential dwellings, and commercial establishments. Our expertise extends to the manufacturing
           of high-quality laboratory furniture tailored to the needs of industrial, educational, and healthcare sectors. With a dedicated
            and diligent team, we consistently deliver projects on schedule, ensuring impeccable quality and personalized design solutions that
             align with your budget.
             </p>
      </div>
      <hr className='w-50 me-auto ms-auto'/>
      {/* <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para'>
        <h1>Our Mission</h1>
        <p className='text-dark '>
        At Smart Lab, our mission is to exceed customer loyalty through the delivery of high-quality products at affordable prices
             </p>
      </div>
      <hr className='w-75 me-auto ms-auto'/>
      <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para'>
        <h1>Our Vision</h1>
        <p className='text-dark '>
        To be the premier interior design and laboratory furniture manufacturing company in the UAE, renowned for innovation, excellence, and customer satisfaction.
             </p>
      </div>
      <hr className='w-75 me-auto ms-auto'/>
      <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para'>
        <h1>Our Goal</h1>
       
        <p className='text-dark'>- To maintain affordability without compromising on quality.</p>
        <p className='text-dark'>- To continuously enhance our design expertise and manufacturing capabilities.</p>
        <p className='text-dark'>- To foster long-lasting relationships with our clients by meeting and exceeding their expectations.</p>
        <p className='text-dark'>- To contribute to the creation of inspiring and functional interior spaces across diverse sectors.</p>
  
            
      </div>
      <hr className='w-75 me-auto ms-auto'/>
      <div data-aos="fade-right" data-aos-delay={500} className='aboutpage-para '>
        <h1>Our Skill</h1>
        <p className='text-dark'>- Expertise in innovative interior design concepts.</p>
        <p className='text-dark'>- Exceptional project management capabilities to ensure on-time delivery.</p>
        <p className='text-dark'>- Customized design solutions tailored to meet your specific requirements.</p>
        <p className='text-dark'>- Proficiency in crafting laboratory furniture for industrial,educational, and healthcare sectors.</p>

      <hr className='w-75 me-auto ms-auto'/>

      </div> */}
      
      <Legacy />

     

      


      <Footer/>      
    </div>
  )
}

export default AboutPage