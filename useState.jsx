import React, { useState } from "react";

function Practise() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Rohit");
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <hr />
      <h1>Change Name</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("Himanshu");
        }}
      >
        Change Name
      </button>
    </div>
  );
}

export default Practise;





Notes :- 
  
  1 -> useState


React hooks are the special function which you can
hook in the react feature

Component doesnt render when we click any button 
without using react hooks

useState ->whenever in the useState the value of useState changes
the Component gets re-render automatically

Everytime theres a state update your component gets re-rendered
useState return two things 
1-> current state
2-> a function where you can actually update a state

const [name, setName] = useState('initial value')

usually we will use four value in useState
i-> string, boolean, array, object
                                   
State of a component -> we just mean that data being used 
in that component at that point of time
what if we wanted to change or update the data of the
component in respect to a event occurs like a user
clicks a button

using the let name = 'mario' and updating inside 
the event function name = 'rohit' its changes the value
but not get reflected to the ui in we can see the updated value
in the console 
in the normal case the variable value changes but it doesnt 
trigger react to re-render the component and show the 
updated name value on the ui part and we coninue to see the old value 

To invoke react to re-render the component so that we 
can see the updated value we use hooks

HOOKS -> Hooks in react are special kind of function that does a certain job

useState hook gives us a way to make a reactive value and also provides us a way to change
that value whenever we want

const [name, setName] = useState('mario')

If we want to change the inital value we can use setName function to do it

when we use the setName function to change the value that triggers react to re-render
the component and when it re-render and we have the new value of name
becuase it has been updated 

