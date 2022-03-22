import React, { useLayoutEffect, useEffect, useState } from "react";

const LayoutEffect = () => {
  const [data, setData] = useState([]);

  const [length, setLength] = useState(0);

  const newData = [
    {
      name: "Gowther",
      email: "kfk@gls.cs",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 5000);
  }, [input]);

  useLayoutEffect(() => {
    setLength(data.length);
  }, []);

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <p> Valores: {length}</p>
    </>
  );
};

export default LayoutEffect;
