import React from 'react';
import BlogFilter from '../components/Blogs/BlogFilter/BlogFilter';
import BlogHeader from '../components/Blogs/BlogHeader/BlogHeader';
import BlogList from '../components/Blogs/BlogList/BlogList';
import Layout from '../components/common/layout/Layout';

const DUMMY_BLOGS = [
  {
    id: 'b1',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b2',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b3',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b4',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b5',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b6',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b7',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b8',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b9',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b10',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },

  {
    id: 'b11',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b12',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b13',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b14',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b15',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b16',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 'b17',
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
];

const Blog = () => {
  return (
    <>
      <Layout>
        <BlogHeader />
        <BlogFilter />
        <BlogList blogs={DUMMY_BLOGS} />
      </Layout>
    </>
  );
};

export default Blog;
