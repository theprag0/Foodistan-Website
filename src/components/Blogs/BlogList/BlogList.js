import React from 'react';
import BlogItem from '../BlogItem/BlogItem';
import './BlogList.css';

const BlogList = ({ blogs }) => {
  return (
    <ul>
      <h1 className="blog-heading">Recommended for You</h1>
      {blogs.map((b) => (
        <BlogItem
          key={b.id}
          title={b.title}
          dateTime={b.dateTime}
          blog={b.blog}
        />
      ))}
    </ul>
  );
};

export default BlogList;
