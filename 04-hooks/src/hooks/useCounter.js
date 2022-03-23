import { useState } from "react";

export const useCounter = (initValue) => {
  const [counter, setCounter] = useState(initValue);

  const increment = () => {
    setCounter((cant) => cant + 1);
  };
  const decrement = () => {
    setCounter((cant) => cant - 1);
  };

  return [counter, increment, decrement];
};
