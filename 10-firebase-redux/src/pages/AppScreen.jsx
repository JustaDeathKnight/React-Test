import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearRegistro } from "../actions/nomina";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);

const dispatch = useDispatch();

const handleAdd = () => {
  dispatch(crearRegistro());
}

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="center">
          Hola{" "}
          {auth.displayName === "Gowther"
            ? auth.displayName + "🐺"
            : auth.displayName}
        </h3>
        <hr />
        <button onClick={handleAdd} className="btn green">Agregar</button>
      </div>
    </>
  );
};

export default AppScreen;
