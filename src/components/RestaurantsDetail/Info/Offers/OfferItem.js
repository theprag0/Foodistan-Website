import React from 'react';
import { Card } from 'react-bootstrap';

const OfferItem = ({ id, title, offer }) => {
  return (
    <Card>
      <div className="offer_container">
        <h1 className="offers__title">OFFER</h1>
      </div>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{offer}</Card.Text>
      <p>Terms and Conditions Applied</p>
    </Card>
  );
};

export default OfferItem;
