import React from 'react';
import { Card } from 'react-bootstrap';

const OfferItem = ({ id, title, offer }) => {
  return (
    <Card>
      <h1 className="offers__title">OFFER</h1>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{offer}</Card.Text>
      <p>Terms and Conditions Applied</p>
    </Card>
  );
};

export default OfferItem;
