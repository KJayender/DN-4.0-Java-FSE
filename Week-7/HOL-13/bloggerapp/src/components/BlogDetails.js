import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Tips', author: 'Sonu' },
    { id: 2, title: 'Microservices with Spring Boot', author: 'Sonu' },
  ];

  return (
    <div>
      <h2>📰 Blog Posts</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;