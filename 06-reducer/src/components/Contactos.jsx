import React, { useEffect, useReducer, useState } from "react";
import { ContactosReducer } from "../reducers/ContactosReducer";
import FormularioAdd from "./FormularioAdd";
import TablaContactos from "./TablaContactos";

const Contactos = () => {
  const init = () => {
    const contactos = localStorage.getItem("contactos");
    return contactos ? JSON.parse(contactos) : [];
  };

  const [state, dispatch] = useReducer(ContactosReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  const [formView, setFormView] = useState(false);

  return (
    <div className="container mt-2">
      <button type="button" className="btn btn-outline-success mb-2 mt-2" onClick={() => setFormView(!formView)}> {formView ? 'Cerrar Formulario' : 'Añadir Contacto' } </button>

      
      {formView && <FormularioAdd dispatch={dispatch} />}

      <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
