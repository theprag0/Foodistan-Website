import React from 'react';

import './BlogsCards.css';

const BlogsCards = (props) => {
  return (
    <div
      className={props.className ? `${props.className} blog-card` : 'blog-card'}
    >
      {props.children}
    </div>
  );
};

export default BlogsCards;
