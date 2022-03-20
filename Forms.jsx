
import { useState } from "react";

const Forms = () => {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [selectState, setSelectState] = useState("himanshu");

  const containerStyle = {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleSubmit = (e) => {
    // To submit the input filled data to the json server we can create the
    // object of it and make a post request of it like this
    e.preventDefault();
    const data = { inputFieldValue, selectState };
  };
  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit}>
        <label> Input Field:</label>
        <input
          type="text"
          value={inputFieldValue}
          onChange={(e) => {
            setInputFieldValue(e.target.value);
          }}
        />
        <button>Submit</button>
        <br />
        <h3>{inputFieldValue}</h3>
        <br />
        <hr />
        <label>Select Name:</label>
        <select
          value={selectState}
          onChange={(e) => {
            setSelectState(e.target.value);
          }}
        >
          <option value="himanshu">himanshu</option>
          <option value="rohit">rohit</option>
        </select>
        <h3>{selectState}</h3>
      </form>
    </div>
  );
};
export default Forms;

/*
Contolled Inputs - Are basically a way in react of 
setting up input fields in forms so that we can track
their value so if we had a text input field for example
a user can type into it and we can store that value
of what they type in sone kind of state and we can also 
make use it so that if state changes that in turns updates the value 
that we see in the input field.
so we're always keeping the input field and our 
state insync with each other.

If i was able to type something in the input field
or select any option i want to be able to track that 
value and store it in some state inside this component
so we can do something with that data later on
 
assigning value = {inputFieldValue} whaever the state 
will be that will be assigned to inputFieldValue
after stating that to the input field we can't change
the inputFieldValue because now it is being controlled
by react

So overcome this what we can do it when we try to change this 
it triggers the setInputFieldValue useState function and 
update it with whatever we trying to change it with
using onChangeEvent

lets do something with data
when a button is pressed inside a form it fires
a submit event on the form itself so we can listend to that
submit event and react to it

onSubmit the form inside the handleSubmit function
we are preventing the default action of the form being
submitted that default action is for the page to refresh
if i was to click the submit button it will refresh the page
we dont want that to happen 
so to prevent that will take event object and use
the preventDefault() method on it
*/
