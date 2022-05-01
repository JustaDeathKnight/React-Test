import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, description, type, id }) => {
  const path = `/assets/${type}-${id}.png`;
  return (
    <div className="card m-1 col-12 col-md-4" style={{ width: 200 }}>
      <img className="card-img-bot img-thumbnail mt-2 " src={path} alt={id} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <Link className="card-link" to={`/character/${id}`}>
            Ver más..
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
