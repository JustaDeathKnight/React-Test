import React from "react";

const Element = ({ data }) => {
  console.log(data);
  const { fecha, pago } = data;
  return (
    <tr>
      <td>{new Date().setTime(fecha.seconds)}</td>
      <td>{pago}</td>
      <td>
        <button className="red darken-4">Eliminar</button>
      </td>
    </tr>
  );
};

export default Element;
