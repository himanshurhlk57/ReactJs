import React, { useState, useMemo } from "react";

function UseMemo() {
  const [value, setValue] = useState(1);

  // This is the function that is doing the heavy opeartion
  const result = useMemo(() => {
    return factorial(value);
  }, [value]);

  const [name, setName] = useState("");
  return (
    <div>
      <h1>
        Factorial of {value} is: {result}
      </h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>

      <hr />

      <h3>Enter Name</h3>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>My name is {name}</h3>
    </div>
  );
}

// const factorial = (n) => {
//   if (n < 0) {
//     return -1;
//   }
//   if (n == 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };

// Lets make this function a heavy operation
const factorial = (n) => {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

export default UseMemo;

/* This useMemo hook will memoize the function which is
doing the heavy opeartionn
now while writing on input field it is basically 
freezing it shouldn't happen 
what's happeing is basically every time we 
are typing text in our input field our whole
component is getting re-render as we now on state changes
the component re-render but its also invoking the
factorial function and eventually slowing 
down the whole process and typing on input field 
feels like freezing the screen we can optimize it
using useMemo hook
now will wrap the function inside the useMemo
the function which is cauing delay
whenever our value is icrementing we need to execute the factorial
function whereas whenever we type type text in our
input field we donot want to call factorail function 

now as usual the facorial function is getting
called inside useMemo function and it is calculating factorial
now in case of input field factorial function is 
not getting called and experience is smooth
*/
