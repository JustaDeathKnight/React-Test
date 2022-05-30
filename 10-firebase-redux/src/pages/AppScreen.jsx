import React from "react";
import { useSelector } from "react-redux";
import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";

const AppScreen = () => {
  const { auth } = useSelector((state) => state);

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
        <FormAdd />
      </div>
    </>
  );
};

export default AppScreen;
