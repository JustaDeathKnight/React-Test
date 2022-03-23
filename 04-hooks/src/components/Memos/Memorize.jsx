import React, { useCallback, useMemo, useState } from "react";
import Btn from "./Btn";
import Dato from "./Dato";

const Memorize = () => {
  const [counter, setCounter] = useState(5);
  const [view, setView] = useState(true);

  // const pesado = (iter) => {
  //   for (let i = 0; i < iter; i++) {
  //     console.log("procesando");
  //   }
  //   return "fin del proceso";
  // };

  // const pesadoMemo = useMemo(() => pesado(counter), [counter]);

  const add = useCallback(
    //recibe una funcion de lo que queremos ejecutar
    // aparte de usar useCallback tambien hay que memorizar el componente
    () => {
      setCounter((actual) => actual + 1);
    },
    [setCounter]
  );

  return (
    <>
      <h1>
        Memorizes: <Dato value={counter} />
      </h1>
      <hr />
      {/* {pesadoMemo} */}
      <Btn add={add} />
      <button onClick={() => setView(!view)}>Quitar</button>
    </>
  );
};

export default Memorize;
