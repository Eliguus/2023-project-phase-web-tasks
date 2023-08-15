let posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      slug: "first-post",
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the content of the second post.",
      slug: "second-post",
    },
  ];
  
  export function getAllPosts() {
    return posts;
  }
  
  export function getPostBySlug(slug) {
    return posts.find((post) => post.slug === slug);
  }
  
  export function createNewPost(postData) {
    const newPost = {
      id: Date.now(),
      ...postData,
    };
    posts.push(newPost);
    return newPost;
  }
  
  export function updatePost(slug, postData) {
    const postIndex = posts.findIndex((post) => post.slug === slug);
    if (postIndex !== -1) {
      posts[postIndex] = {
        ...posts[postIndex],
        ...postData,
      };
      return posts[postIndex];
    }
    return null;
  }
  
  export function deletePost(slug) {
    const postIndex = posts.findIndex((post) => post.slug === slug);
    if (postIndex !== -1) {
      const deletedPost = posts[postIndex];
      posts.splice(postIndex, 1);
      return deletedPost;
    }
    return null;
  }