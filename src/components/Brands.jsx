import React from 'react'
import "../styles/brands.css"
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







const Brands = () => {
  return (
    <div className='brands'>
      
          <div className='about-img'>
         
            <div className='color-overlay'>
            </div>

            <div className='brands-heading'>
          <h2>
          {Array.from(`OUR BRANDS`).map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
      </div>

            <div className="scrolling-brands">

              <div className='scrolling-bimg' >
              <img src={Brand1} width={150} height={150} alt="" />
              <img src={Brand2} width={150} height={150} alt="" />
              <img src={Brand3} width={150} height={150} alt="" />
              <img src={Brand4} width={150} height={150} alt="" />
              <img src={Brand5} width={150} height={150} alt="" />
              <img src={Brand6} width={150} height={150} alt="" />
              <img src={Brand7} width={150} height={150} alt="" />
              <img src={Brand8} width={150} height={150} alt="" />
              <img src={Brand9} width={150} height={150} alt="" />
              <img src={Brand10} width={150} height={150} alt="" />
              <img src={Brand11} width={150} height={150} alt="" />
              <img src={Brand12} width={150} height={150} alt="" />
              <img src={Brand13} width={150} height={150} alt="" />
              <img src={Brand14} width={150} height={150} alt="" />
              </div>
              <div className='scrolling-bimg' >
              <img src={Brand1} width={150} height={150} alt="" />
              <img src={Brand2} width={150} height={150} alt="" />
              <img src={Brand3} width={150} height={150} alt="" />
              <img src={Brand4} width={150} height={150} alt="" />
              <img src={Brand5} width={150} height={150} alt="" />
              <img src={Brand6} width={150} height={150} alt="" />
              <img src={Brand7} width={150} height={150} alt="" />
              <img src={Brand8} width={150} height={150} alt="" />
              <img src={Brand9} width={150} height={150} alt="" />
              <img src={Brand10} width={150} height={150} alt="" />
              <img src={Brand11} width={150} height={150} alt="" />
              <img src={Brand12} width={150} height={150} alt="" />
              <img src={Brand13} width={150} height={150} alt="" />
              <img src={Brand14} width={150} height={150} alt="" />
              </div>


              </div>
            </div>            
        </div>
  )
}

export default Brands