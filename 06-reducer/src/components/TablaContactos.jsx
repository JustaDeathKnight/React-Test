import React from "react";

const TablaContactos = ({ contactos = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <table className="table table-dark table-striped table-hover table-bordered my-2">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Número</th>
          <th className="text-center">Acción</th>
        </tr>
      </thead>
      <tbody>
        {contactos.map((contacto) => {
          const finalId = contacto.id.split("-");

          return (
            <tr className="table-light" key={contacto.id}>
              <th>{finalId[1]}</th>
              <td>{contacto.nombre}</td>
              <td>{contacto.apellido}</td>
              <td>{contacto.numero}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(contacto.id)}
                  className="position-relative top-0 start-50 translate-middle-x btn btn btn-outline-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaContactos;
