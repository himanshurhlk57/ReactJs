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


   map function fires a callback function for each item whereby each time around
   we want to return a bit of jsx template and thats going to inside
   paranthesis ()
   when we output a list like this using the map method each root element
   in the template that we return must have a key property
   if we delete and update item from the array to keep track of those items
   to do this you always need to add key attribute to each item we output otherwise react cannot
   distinguish between list item in the dom so this is normally and
   id property for each item in the array
   and for all the list item in the array the id property must be unique
