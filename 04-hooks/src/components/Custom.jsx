import { useCounter } from "../hooks/useCounter";

const Custom = () => {
  const [counter, increment, decrement] = useCounter(33);

  return (
    <>
      <h1>CustomHook: {counter}</h1>
      <hr />
      <button onClick={decrement}> -1 </button>
      <button onClick={increment}> +1 </button>
    </>
  );
};

export default Custom;
