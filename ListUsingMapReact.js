import React from "react";

function Mapuse() {
  const lists = ["Apple", "Orange", "Banana"];

    return (
      <div>
        <h1>List of items</h1>
        <ul>
          {lists.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    );
  }

  const fruits = [
    { name: "Apple", id: 1 },
    { name: "Apricot", id: 2 },
    { name: "Honeyberry", id: 3 },
    { name: "Papaya", id: 4 },
    { name: "Jambul", id: 5 },
    { name: "Plum", id: 6 },
    { name: "Lemon", id: 7 },
  ];

  return (
    <>
      <h2>Fruits data</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Mapuse;



// Receiving props destructing it and then using map method to display array of object content

import React from "react";

function BlogList({ blogs, title }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
