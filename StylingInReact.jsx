
import React, { useState } from "react";

function ChangebackgroundColor() {
  
   const name = "Himanshu Kumar";
  
   const stylingProperty = {
    color: "blue",
    backgroundColor: "yellow",
    textShadow: "0px 2px 4px #ffe9c5",
    fontFamily: '"Josefin Sans", sanse-serif',
  }; 

  
  let color = "white";
  const [currentColor, setColor] = useState(color);
  const changeBackgroundColor = () => {
    color = "#8e44ad";
    setColor(color);
  };
  return (
    <>
     <h1 style={{ color: "red", backgroundColor: "black" }}> My name is {name} </h1>
      <h1 style={stylingProperty}>My name is {name}</h1>
      <div style={{ backgroundColor: currentColor }}>
        <button onClick={changeBackgroundColor}>Change bg color</button>
      </div>
    </>
  );
}

export default DigitalClock;
