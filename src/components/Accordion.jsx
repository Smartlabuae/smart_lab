import React, { useState } from 'react';
import "../styles/accordion.css";

function Accordion() {
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    setActive(index === active ? null : index);
  };

  return (
    <div className='accordion-full'>
      {accordions.map((accordion, index) => (
        <div key={index}>
          <button
            className={`btn btn-outline border border-primary accordion  ${index === active ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <p>
            {accordion.title}
            </p>
          </button>
          <div
            className="panel"
            style={{
              display: index === active ? 'block' : 'none'
            }}
          >
            {accordion.content &&
            <p>{accordion.content}<br/></p>}
            {accordion.content1 &&<p>
            {accordion.content1}<br/>
            { accordion.content2}<br/>
            { accordion.content3}<br/>
            { accordion.content4}<br/>
            </p>}
          </div>
        </div>
      ))}
    </div>
  );
}

const accordions = [
  {
    title: 'Our Mission',
    content: 'At Smart Lab, our mission is to exceed customer loyalty through the delivery of high-quality products at affordable prices',
  },
  {
    title: 'Our Vision',
    content: 'To be the premier interior design and laboratory furniture manufacturing company in the UAE, renowned for innovation, excellence, and customer satisfaction.',
  },
  {
    title: 'Our Goal',
    content1: '- To continuously enhance our design expertise and manufacturing capabilities.',
    content2:'- To foster long-lasting relationships with our clients by meeting and exceeding their expectations.',
    content3:'- To contribute to the creation of inspiring and functional interior spaces across diverse sectors.',
    content4:'- To maintain affordability without compromising on quality.'
  
  },
  {
    title: 'Our Skill',
    content1: '- Expertise in innovative interior design concepts.',
    content2:'- Proficiency in crafting laboratory furniture for industrial, educational, and healthcare sectors.',
    content3:'- Exceptional project management capabilities to ensure on-time delivery.',
    content4:'- Customized design solutions tailored to meet your specific requirements.'
  },
  
  // Add more accordion sections as needed
];

export default Accordion;
