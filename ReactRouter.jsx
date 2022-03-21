
import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function RoutesApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/about">About</Link>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesApp;

import React from "react";

function Home() {
  return (
    <div>
      <h1> Home Page</h1>
    </div>
  );
}

export default Home;


import React from "react";

function About() {
  return (
    <div>
      <h1> About Page</h1>
    </div>
  );
}

export default About;



The first thing to do after installation is complete is to make React Router available 
anywhere in your app.

To do this, open the index.js file in the src folder and import BrowserRouter from 
react-router-dom and then wrap the root component (the App component) in it.

Routes acts as a container/parent for all the individual routes that will be created in our app.

Route is used to create a single route. It takes in two attributes:

Path: - / -> Any component whose pathname is a backslash will get rendered
         first whenever the app loads for the first time
         
element, which specifies the component the route should render.

Need way to introduce multiple different pages 
or routes in our react application and the way we do this in react
is with the react router

Before that lets look at how a typical multi-page 
website works

Typical website not using react handle multiple pages

we generally always start in the browser by typing 
a url in the address bar and that sends a request
to a server for that address and the server handles it

server generally going to send back a full html page
which we then view in a browser now if a user was to click on a link 
in that website to another page like a contact page
it then send a brand new request to the server and then server responds 
back by sending back a new contact html page that we view in the browser
and the cycle continues.
so we constantly making a request to the server for new pages

React deligate all the routing and changing of page
content to the browser only and it starts the same way we make an initial request in the 
broswer the server then responds to that by sending back the html page
to the broswer but it also sends back our compiled react javascript files
which controlls our react application.
From this point of time react and react-router takes full control of the application
so initially the html page that we get back is virtually empty and then react inject content 
dynamically using the componentts that we create

if we then decide to click on a link to a new page 
the react router is going to step in and intercept
that request to stop it from going to a server and instead it's
going to look at the new page request and inject the required
content on the screen

example - clicking on the contact link the react router
 will tell react to inject the contact component into the browser
 if we were to click on a about link it would tell react to inject
 the about component
