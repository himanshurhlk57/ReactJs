UseContext is also a hook in case of contextApi the consumer part was getting messy 
so to simplify things we have useContext in the useContext we need to receive the createContext component
and then it return us the value we want to use in our child component 
useContext hook makes consumer part less messy

React's useContext hook makes it easy to pass data throughout your app without manually passing props
down the tree


import { createContext } from "react";
import ComB from "./ComB";

const LastName = createContext();

// LastName context have two property one
// is provider and second is consumer

const ComA = () => {
  return (
    <LastName.Provider value={"Kumar"}>
      <ComB />;
    </LastName.Provider>
  );
};

export default ComA;
export { LastName };


import ComC from "./ComC";

const ComB = () => {
  return (
    <div>
      <ComC />
    </div>
  );
};

export default ComB;


import { useContext } from "react";
import { LastName } from "./ComA";

const ComC = () => {
  const lastName = useContext(LastName);
  return (
    <div>
      <h1>This is himanshu {lastName}</h1>;
    </div>
  );
};

export default ComC;

