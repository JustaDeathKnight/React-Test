import React from "react";
import { useState, useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);

    

  return (
    <div className="container text-center d-inline">
      <h1>UseEffect</h1>
      <hr />
      Contador: {state}
    </div>
  );
};

export default State;
