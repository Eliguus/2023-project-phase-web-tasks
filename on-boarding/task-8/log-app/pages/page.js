import React from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { getAllPosts } from '../data/posts';

const Home = () => {
  const posts = getAllPosts();

  return (
    <Layout>
      <h1>Welcome to My Blog</h1>
      <PostList posts={posts} />
    </Layout>
  );
};

export default Home;