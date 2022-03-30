import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const mens = Characters.filter((character) => character.type === "h");

  return (
    <div>
      <h1>MenScreen</h1>
      <hr />
      <div className="row">
        {mens.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
