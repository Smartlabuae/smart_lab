// src/components/GoogleMap.js
import React from 'react';

function GoogleMap() {
  return (
    <div>
      <iframe
        title="Descriptive Title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7795.757743541722!2d54.45855407378224!3d24.31483107342007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e3fca92c3cd0f%3A0xf21e7699b52e5a45!2sSmart%20Laboratory%20Furniture%20%26%20Decore!5e0!3m2!1sen!2sin!4v1697780084526!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      
      ></iframe>
    </div>
  );
}

export default GoogleMap;
