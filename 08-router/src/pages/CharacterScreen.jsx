import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import { Characters } from "../models/Characters";

const CharacterScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();

  const handleBack = () => {};

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${id}.png`;

  return (
    <div className="container row mt-3">
      <div className="col-8">
        <img
          src={path}
          alt={id}
          className="img-thumbnail"
          style={{ width: "70%", height: "400px" }}
        />
      </div>
      <div className="col-4"></div>
      <h2>Nombre: {name}</h2>
      <p>Descripción: {description}</p>
      <button className="btn btn-outline-dark" onClick={handleBack}>
        Go back
      </button>
    </div>
  );
};

export default CharacterScreen;
