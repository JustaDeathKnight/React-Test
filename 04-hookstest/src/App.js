import React from "react";
import Calculadora from "./components/Calculadora";
import Effect from "./components/Effect";
import LayoutEffect from "./components/LayoutEffect";
import State from "./components/State";

const App = () => {
  return (
    <div className="container text-center">
      <LayoutEffect />
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
