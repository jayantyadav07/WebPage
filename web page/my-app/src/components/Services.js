import React from 'react';

const Services = () => {
  const services = [
    'Digital Transformation',
    'ERP',
    'AR/VR',
    'AI/ML',
    'Blockchain',
    'Web & Mobile Apps',
  ];

  return (
    <div className="section">
      <h2>Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index}>{service}</div>
        ))}
      </div>
    </div>
  );
};

export default Services;
