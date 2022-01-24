import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import './BlogHeader.css';

const BlogHeader = () => {
  return (
    <section>
      <div className="blog-header">
        <div className="blog-searchbar">
          <span>
            <BiSearch />
          </span>
          <input type="text" placeholder="Search Articles" />
        </div>
        <div className="post-blog">
          <p>Post Your Article</p>
          <button>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
