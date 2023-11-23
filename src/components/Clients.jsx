import React from 'react'
import "../styles/clients.css"
import client1 from "../images/clients/client1.jpg"
import client2 from "../images/clients/client2.png"
import client3 from "../images/clients/client3.png"
import client4 from "../images/clients/client4.png"
import client5 from "../images/clients/client5.png"
import client8 from "../images/clients/client8.png"
import client9 from "../images/clients/client9.png"
import client10 from "../images/clients/client10.jpg"
import client11 from "../images/clients/client11.png"
import client12 from "../images/clients/client12.jpg"


const Clients = () => {
  return (
    <div className='client'>
      
          <div className='about-img'>
         
            <div className='color-overlay'>
            </div>

            <div className='client-heading'>
          <h2>
          {Array.from(`OUR CLIENTS`).map((letter, index) => (
            <span key={index} data-aos="fade-right" data-aos-delay={index * 100}>
              {letter}
            </span>
          ))}
        </h2>
      </div>
            <div className='scrolling-text'>
            <div className="scrolling-img">
             <img src={client1} width={150} height={150} alt="" />
             <img src={client2} width={150} height={150} alt="" />
             <img src={client3} width={150} height={150} alt="" />
             <img src={client4} width={150} height={150} alt="" />
             <img src={client5} width={150} height={150} alt="" />
             <img src={client8} width={150} height={150} alt="" />
             <img src={client9} width={150} height={150} alt="" />
             <img src={client10} width={150} height={150} alt="" />
             <img src={client11} width={150} height={150} alt="" />
             <img src={client12} width={150} height={150} alt="" />
              </div>
              <div className="scrolling-img">
             <img src={client1} width={150} height={150} alt="" />
             <img src={client2} width={150} height={150} alt="" />
             <img src={client3} width={150} height={150} alt="" />
             <img src={client4} width={150} height={150} alt="" />
             <img src={client5} width={150} height={150} alt="" />
             <img src={client8} width={150} height={150} alt="" />
             <img src={client9} width={150} height={150} alt="" />
             <img src={client10} width={150} height={150} alt="" />
             <img src={client11} width={150} height={150} alt="" />
             <img src={client12} width={150} height={150} alt="" />
              </div>
         
              </div>
             
              
            </div>            
        </div>
  )
}

export default Clients