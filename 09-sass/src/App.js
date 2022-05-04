import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h1 className="title">Hola perros </h1>
      <hr />
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Link a youtube
          </a>
        </li>
        <li>
          <a href="https://www.google.com">Link a google</a>
        </li>
      </ul>
      <hr />
      <h2>Counter: 0</h2>
      <Button type="btn btn-primary" text="+1" />
    </div>
  );
};

export default App;
