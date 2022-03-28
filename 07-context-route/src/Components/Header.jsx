import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h2 className="navbar-brand">Context App</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="navbar-item">
              <a className="nav-link active" href="#">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="#">
                About<span className="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
