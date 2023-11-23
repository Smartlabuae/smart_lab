import React from 'react'
import Footer from '../Footer'
import aboutPageImg from "../../images/home2.jpg"
import one from  "../../images/1.jpg"
import two from  "../../images/2.jpg"
import three from  "../../images/3.webp"
import four from "../../images/lab/01.webp"
import five from "../../images/lab/02.webp"
import six from "../../images/lab/03.webp"
import seven from "../../images/lab/04.webp"
import eight from "../../images/lab/05.webp"
import nine from "../../images/lab/06.webp"
import Navbar from '../Navbar'
import "../../styles/pages/projects.css"

const Projects = () => {
  return (
    <div className='projects'>


    <Navbar />
      <div className='aboutpage-img'>
        <img src={aboutPageImg} alt="" />
      </div>
        
        <div className='showcase'>
      <h1>
            {Array.from("SHOWCASE").map((letter, index) => (
      <span
        key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100}      >
        {letter}
      </span>
    ))}
            </h1>
          <hr className='w-25 ' />
          <p data-aos="fade-right">Bringing visions to reality</p>
        </div>

      <div className='collab' data-aos="fade-right">
      
        <div className='first-row'>
          <div className='box'><img src={one} width={300} height={300} alt="" /></div>
          <div className='box'><img src={two} width={300} height={300} alt="" /></div>
          <div className='box'><img src={three} width={300} height={300} alt="" /></div>
          <div className='box'><img src={aboutPageImg} width={300} height={300} alt="" /></div>
          <div className='box'><img src={four} width={300} height={300} alt="" /></div>
          <div className='box'><img src={five} width={300} height={300} alt="" /></div>
          <div className='box'><img src={six} width={300} height={300} alt="" /></div>
          <div className='box'><img src={seven} width={300} height={300} alt="" /></div>
          <div className='box'><img src={eight} width={300} height={300} alt="" /></div>
          <div className='box'><img src={nine} width={300} height={300} alt="" /></div>
          </div>

      </div>


     


      <Footer/>

    </div>
  )
}

export default Projects