import React from "react";
// React.memo es una funcion que recibe todo e componente
const Dato = React.memo(({ value }) => {
  console.log("Me estoy recargando bro 🐺");
  return (
    <>
      <p>{value}</p>
    </>
  );
});

export default Dato;
