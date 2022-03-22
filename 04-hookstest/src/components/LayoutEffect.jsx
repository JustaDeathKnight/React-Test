import React, { useLayoutEffect, useState } from "react";

const LayoutEffect = () => {
  const [data, setData] = useState([]);

  const efecto = data.length;

  const newData = [
    {
      name: "Gowther",
      email: "kfk@gls.cs",
    },
  ];

  useLayoutEffect(() => {
    setTimeout(() => {
      setData(newData);
    }, 5000);
  }, []);

  return (
    <>
      <h1>useLayoutEffect</h1>
      <hr />
      <p> Valores {efecto}</p>
    </>
  );
};

export default LayoutEffect;
