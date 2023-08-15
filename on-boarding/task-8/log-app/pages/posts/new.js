import React, { useState } from 'react';
import { createNewPost } from '../../data/posts';
import { useRouter } from 'next/router';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = createNewPost({ title, content });
    // Handle success/error
    setTitle('');
    setContent('');
    router.push(`/posts/${newPost.slug}`);
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" required />
        <textarea value={content} onChange={handleContentChange} placeholder="Content" required />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewPost;