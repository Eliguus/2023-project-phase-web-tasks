import React, { useState, useEffect } from 'react';
import { getPostBySlug, updatePost } from '../../data/posts';
import { useRouter } from 'next/router';

const EditPost = ({ slug }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    const post = getPostBySlug(slug);
    setTitle(post.title);
    setContent(post.content);
  }, [slug]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = updatePost(slug, { title, content });
    // Handle success/error
    router.push(`/posts/${updatedPost.slug}`);
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" required />
        <textarea value={content} onChange={handleContentChange} placeholder="Content" required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;