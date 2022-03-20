
context
provider
consumer

Lets pass data directly from componentA to componentC the data i want to pass is lastname

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



import { LastName } from "./ComA";

const ComC = () => {
  return (
    <div>
      <LastName.Consumer>
        {(lastName) => {
          return <h1>This is himanshu {lastName}</h1>;
        }}
      </LastName.Consumer>
    </div>
  );
};

export default ComC;


