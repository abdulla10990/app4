import React from 'react';
import { useLocation } from 'react-router-dom';
import './ServiceDetails.css';
import PaymentForm from './PaymentForm';

const ServiceDetails = () => {
  const location = useLocation();
  const { service } = location.state;

  return (
    <div className="service-details">
      <h2>{service.title}</h2>
      <p>{service.longDescription}</p>
      <p>Price: {service.price}</p>
      <PaymentForm service={service} />
    </div>
  );
};

export default ServiceDetails;

