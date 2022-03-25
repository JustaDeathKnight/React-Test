import React from "react";

const TablaContactos = ({ contactos }) => {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Número</th>
          <th>Acción</th>
        </tr>
      </thead>
    </table>
  );
};

export default TablaContactos;
