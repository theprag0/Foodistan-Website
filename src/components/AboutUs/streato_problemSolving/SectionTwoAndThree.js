import React from 'react';

import './SectionTwoAndThree.css';

const SectionTwoAndThree = ({
  data,
  title,
  backgroundColor,
  imgHeight,
  imgWidth,
}) => {
  return (
    <section
      className="problem-solving"
      style={
        backgroundColor
          ? { backgroundColor: backgroundColor }
          : { backgroundColor: '#fff' }
      }
    >
      <h1>{title}</h1>
      <ul className="problem-solving__items">
        {data.map((d) => (
          <li key={d.id} className="problem-solving__item">
            <img
              src={d.img}
              alt="ps"
              style={{ height: imgHeight, width: imgWidth }}
            />
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionTwoAndThree;
