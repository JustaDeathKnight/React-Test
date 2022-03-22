import React from "react";
import { useState, useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log(state);
  }, [] );

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div className="container text-center d-inline">
      <h1>UseEffect</h1>
      <hr />
      Contador: {state}
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default State;
