import { useCallback, useMemo, useState } from "react";

export const useMemorize = (initValue) => {
  const [counter, setCounter] = useState(initValue);
  const [view, setView] = useState(true);

  const hide = useCallback(() => {
    setView(!view);
  }, [setView]);

  const pesado = (iter) => {
    for (let i = 0; i < iter; i++) {
      console.log("procesando");
    }
    return "fin del proceso";
  };

  const pesadoMemo = useMemo(() => pesado(counter), [counter]);

  const add = useCallback(
    //recibe una funcion de lo que queremos ejecutar
    // aparte de usar useCallback tambien hay que memorizar el componente
    () => {
      setCounter((actual) => actual + 1);
    },
    [setCounter]
  );

  return [counter, pesadoMemo, add, hide];
};
