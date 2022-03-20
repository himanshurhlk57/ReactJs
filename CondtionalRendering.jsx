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
