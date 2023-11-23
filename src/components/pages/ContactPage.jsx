import React, { useEffect } from 'react'
import "../../styles/pages/contactpage.css"
import ContactPageImg from "../../images/contact.jpg"
import Aos from 'aos';
import Footer from '../Footer';
import Navbar from '../Navbar';
import GoogleMap from '../pages/map';

const ContactPage = () => {
        
  useEffect(() => {
    Aos.init();
  },[]);

  return (
    <div className='con'>



    <div className='contactpage pb-5'>
      <Navbar />
      <div className='contactpage-img'>
        <img src={ContactPageImg} alt="" />
      </div>

      <div className='contactpagec mt-5 ' >
        <div className='contactpage-content'>
        <p data-aos="fade-right">Contact</p>
        <hr className='w-25'/>
      <h1>
            {Array.from("DROP US A LINE").map((letter, index) => (
      <span
        key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100} >
        {letter}
      </span>
    ))}
            </h1>
        <hr className='w-50'/>
        <a href='/' className='text-center' data-aos="fade-right">Got a project on your mind? Let's discuss about the details. </a>

        <div className='contact-details'>
          <h5>Call Us</h5>
          <p>+971(0)2 6395055</p>
        </div>
        <div className='contact-details'>
          <h5>Email</h5>
          <p>info@smartlabuae.com</p>
        </div>
        </div>

        <div className='contact'>
   <form id="contact-form" method="post">
      <label for="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Your Full Name" required/>
      <label for="email">Email Address</label>
  <input type="email" id="email" name="email" placeholder="Your Email Address" required/>
      <label for="message">Message</label>
  <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
      {/* <a href="javascript:void(0)">--><button type="submit" id="submit" name="submit">Send</button><!--</a>--> */}
</form>
<button className='contact-btn' type="submit" id="submit" name="submit">Send</button>
   </div>


      </div>


      {/* <div className='map'>
      <GoogleMap />

    </div> */}
    </div>
    <Footer/>      
    </div>
  )
}

export default ContactPage