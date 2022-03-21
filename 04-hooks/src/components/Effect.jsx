import React from "react";
// https://magic.reactjs.net/htmltojsx.htm

const Effect = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: "kaksak",
      email: "daddassd",
      password: "sdasdad",
    });
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
