import React from "react";
import { useState, useEffect } from "react";
// https://magic.reactjs.net/htmltojsx.htm

const Effect = () => {
  // const [users, setUsers] = useState([]);
  // const [id, setId] = useState(10);

  // useEffect(() => {
  //   // https://jsonplaceholder.typicode.com/
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   setUsers({});
  //   console.log(users);
  // }, [id]);

  const [first, setfirst] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Effect;
