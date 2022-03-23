import { useMemorize } from "../../hooks/useMemorize";
import Btn from "./Btn";
import Dato from "./Dato";

const Memorize = () => {
  const [counter, pesadoMemo, add, hide] = useMemorize(0);

  return (
    <>
      <h1>
        Memorizes: <Dato value={counter} />
      </h1>
      <hr />
      {pesadoMemo}
      <Btn add={add} />
      <button onClick={hide}>Quitar</button>
    </>
  );
};

export default Memorize;
