import React from 'react';
import Link from 'next/link';

const PostItem = ({ post }) => {
  return (
    <li>
      <Link href={`/posts/${post.id}`}>
        <a>{post.title}</a>
      </Link>
    </li>
  );
};

export default PostItem;