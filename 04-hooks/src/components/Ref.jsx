import { useRef } from "react";

const Ref = () => {
  const ref = useRef(null);

  const handleRef = () => {
    ref.current.value = "hola uwu";
    ref.current.select();
  };

  return (
    <>
      <h1 onClick={handleRef}>useRef</h1>
      <hr />
      <textarea ref={ref} placeholder="Escibe un mensaje..."></textarea>
    </>
  );
};

export default Ref;
