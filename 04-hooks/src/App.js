import React from "react";
import Calculadora from "./components/Calculadora";
import Effect from "./components/Effect";
import State from "./components/State";

const App = () => {
  return (
    <div className="container text-center">
      <Effect />
    </div>

    // <State />
    // <div className="container text-center d-inline">
    //   <h1>Calculadora - PWA</h1>
    //   <hr />
    //   <Calculadora />
    // </div>
  );
};

export default App;
