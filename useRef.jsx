import { useState, useRef } from "react";


  // useRef
  // 1. DOM reference
  // 2. useRef for storing the previous state
  // 3. hold mutable value prevent re-render of component

  // ii-> useRef
  // useRef returns an object which has property called current
  // Now if we any thing in input field it will refer to the input field text
  // as we also added the ref to the input field.

import React, { useRef, useState } from "react";

function UseRef() {
  
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const [name, setName] = useState("");

  const inputElement = useRef("");

  const resetInput = () => {
    setName("");
    inputElement.current.focus();
  };
  
  return (
    <div style={styles}>
      <h1>UseRef</h1>
      <br />
      <div>
        <input
          ref={inputElement}
          name="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <h3>My name is {name}</h3>
    </div>
  );
}

export default UseRef;

