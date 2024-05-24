import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesList.css';
import './Servicelink.css';

const services = [
  {
    id: 1,
    title: 'Local Moving',
    shortDescription: '"Streamline your short move with our efficient and hassle-free services."',
    longDescription: 'This is a longer description for Local Moving service. We offer professional and efficient local moving services to help you relocate within the same city or nearby areas. Our experienced team will handle your belongings with care and ensure a smooth transition to your new home.',
    price: '$500',
  },
  {
    id: 2,
    title: 'Long-Distance Moves',
    shortDescription: '"Simplify your long-distance move with our reliable expertise and seamless logistics."',
    longDescription: 'Our long-distance moving services are designed to make your interstate or cross-country move as seamless as possible. We have the expertise and resources to handle long-distance moves of any size, ensuring your belongings are transported safely and securely to your new destination.',
    price: '$2,000',
  },
  {
    id: 3,
    title: 'We-Recycle',
    shortDescription: '"Let us handle the hassle of disposing of your trash, leaving you free to focus on settling into your new space."',
    longDescription: 'We specialize in moving delicate and valuable items, such as pianos, artwork, antiques, and more. Our team of experts is trained to handle these items with the utmost care and attention to detail, ensuring they arrive at your new location in pristine condition.',
    price: '$0', 
  },
];

function ServicesList() {
  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-box">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/27082837669b49a79b44bbed6fbc3fc9da6b0e6b81db523afdc19ac08f7ddafa?"
            className="service-icon"
            alt="Service Icon"
          />
          <div className="service-info">
            <div className="service-title">{service.title}</div>
            <div className="service-number">{`0${service.id}`}</div>
          </div>
          <div className="service-description">{service.shortDescription}</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad2aebf1cdd05edbd64c74d3e0b5b6f9b3b10d02206e80b401a79515ead50b5d?"
            className="service-image"
            alt="Service Image"
          />
          <Link to={`/services/${service.id}`} state={{ service }} className="service-link">
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ServicesList;
