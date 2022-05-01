import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../models/Characters";
import Card from "../components/Card";

const SearchScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(q);
  const [characters, setCaracters] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLowerCase();
      const newValue = Characters.filter((character) =>
        character.name.toLowerCase().includes(value)
      );
      setCaracters(newValue);
    } else {
      setCaracters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  return (
    <div className="container-fluid">
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Character:{" "}
              <input
                placeholder="Name Character"
                type="text"
                className="form-control mt-2"
                autoComplete="off"
                value={inputValue}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn-dark w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
          <h2>Results: {characters.length}</h2>
          {characters.length === 0 && (
            <div className="alert alert-warning text-center">
              Please search a Character
            </div>
          )}
          {characters.map((character) => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
