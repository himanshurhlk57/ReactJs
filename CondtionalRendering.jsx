import React, { useState } from "react";

function Practise() {
  const [isPending, setIsPending] = useState(false);
  return (
    <div>
      {isPending && <h1>Loading ...</h1>}
    </div>
  );
}

export default Practise;




function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);



let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);


<div>
  {isLoggedIn && <AdminPanel />}
</div>
