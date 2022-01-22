import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

import './Cover.css';
import AnnaImg from '../assets/Anna.jpg';
import PizzaCoverImg from '../assets/PizzaCover.jpg';

const Cover = ({ type, name, rating }) => {
  return (
    <section className="restaurant-detail__cover">
      <img src={type === 'South Indian' ? AnnaImg : PizzaCoverImg} alt={name} />
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
