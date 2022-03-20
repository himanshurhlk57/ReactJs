import "./styles.css";
import ComA from './components/ComA'

export default function App() {
  return (
    <div className="App">
      <ComA />
    </div>
  );
}


import ComB from "./ComB";

const ComA = () => {
  return <ComB lastName={"kumar"} />;
};

export default ComA;


import ComC from "./ComC";

const ComB = ({ lastName }) => {
  return (
    <div>
      <ComC lastName={lastName} />
    </div>
  );
};

export default ComB;



const ComC = ({ lastName }) => {
  return (
    <div>
      <h1>This is himanshu {lastName} </h1>
    </div>
  );
};

export default ComC;
