import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ service }) => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validationError, setValidationError] = useState('');
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');

  const handlePayment = () => {
    if (cardNumber && expiryDate && cvv && phoneNumber && fromLocation && toLocation) {
      // Simulate a payment process
      setTimeout(() => {
        setPaymentSuccessful(true);
      }, 2000);
    } else {
      setValidationError('Please fill in all the fields.');
    }
  };

  const handlePayNowClick = () => {
    setShowPaymentForm(true);
    setValidationError('');
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(.{2})/, '$1/').trim();
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  return (
    <div className="payment-form">
      {paymentSuccessful ? (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <>
          <h3>Payment Details</h3>
          <p>Service: {service.title}</p>
          <p>Price: {service.price}</p>
          {!showPaymentForm ? (
            <>
              <div className="form-group">
                <label htmlFor="fromLocation">From</label>
                <input
                  type="text"
                  id="fromLocation"
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  placeholder="Enter your starting location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="toLocation">To</label>
                <input
                  type="text"
                  id="toLocation"
                  value={toLocation}
                  onChange={(e) => setToLocation(e.target.value)}
                  placeholder="Enter your destination"
                />
              </div>
              <button className="pay-button" onClick={handlePayNowClick}>
                Show Payment Form
              </button>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Enter your card number"
                  maxLength="19"
                  className={!cardNumber && validationError ? 'invalid' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  className={!expiryDate && validationError ? 'invalid' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="Enter your CVV"
                  maxLength="4"
                  className={!cvv && validationError ? 'invalid' : ''}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className={!phoneNumber && validationError ? 'invalid' : ''}
                />
              </div>
              <button className="pay-button" onClick={handlePayment}>
                Pay Now
              </button>
              {validationError && <p className="error">{validationError}</p>}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentForm;
