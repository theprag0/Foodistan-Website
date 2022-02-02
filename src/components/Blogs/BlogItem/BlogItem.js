import React from 'react';

import BlogsCards from '../BlogCard/BlogsCards';
import blogImg from '../assets/blog.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './BlogItem.css';

const BlogItem = ({ title, dateTime, blog }) => {
  return (
    <BlogsCards className="blog-item">
      <div className="blog-item__img-container">
        <img src={blogImg} alt="blog" />
      </div>
      <div className="blog-item__blog-container">
        <div className="blog-item__title">
          <h1>{title}</h1>
          <p>{dateTime}</p>
        </div>
        <div className="blog-item__blog">
          <p>{blog}</p>
        </div>
        <div className="blog-item__actions">
          <button>
            View <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </BlogsCards>
  );
};

export default BlogItem;
