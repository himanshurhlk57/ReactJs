import React, { useState } from "react";

function ParentComponent() {
  
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "Yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "Mario",
      id: 3,
    },
  ]);

  return (
    <div>
      <h1>Props</h1>
      {/* Passing blogs state from parent Home component to child component i.e blogList */}
      <BlogList blogs={blogs} title="All Blogs"/>
    </div>
  );
}

const ChildComponent = ({blogs, title}) => {
  return (
    <div>
      <h4>BlogList Component</h4>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-container" key={blog.id}>
          <h3>{blog.title}</h3>
          <h3>{blog.author}</h3>
        </div>
      ))}
    </div>
  );
};

export default Practise;
