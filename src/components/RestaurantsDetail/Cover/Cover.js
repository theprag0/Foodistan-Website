import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

import './Cover.css';

const Cover = ({ name, rating, image }) => {
  return (
    <section className="restaurant-detail__cover">
      <img src={image} alt={name} />
      <Card>
        <Card.Body>
          <Card.Title>
            {rating} <FaStar />
          </Card.Title>
          <Card.Text>10 + Ratings</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Cover;
