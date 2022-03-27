import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({ state, dispatch }) => {
  const [data, setData] = useState({ nombre: "", apellido: "", numero: "" });

  const { nombre, apellido, numero } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      apellido,
      numero,
    },
  };

  const handleAdd = () => {
    dispatch(actionAdd);
  };

  return (
    <>
      <div className="container mb-3 mt-2">
        <div className="row justify-content-around">
          <div className="col-6">
            <input
              onChange={handleChange}
              name="nombre"
              value={nombre}
              type="text"
              className="form-control"
              placeholder="Nombre"
              aria-label="First name"
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="apellido"
              value={apellido}
              placeholder="Apellido"
              required
            />
          </div>
          <div className="col-6 mt-2">
            <input
              onChange={handleChange}
              name="numero"
              value={numero}
              type="text"
              className="form-control"
              placeholder="Número"
              aria-label="Last name"
              required
            />
          </div>

          <div className="col-6 mt-2">
            <button
              onClick={handleAdd}
              className="btn btn-outline-dark d-grid mx-auto"
              type="button"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioAdd;
