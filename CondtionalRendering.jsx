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
