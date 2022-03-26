import React from "react";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-bottom">
      <div className="container-fluid">
        <a
          className="navbar-brand position-relative bottom-0 start-50 end-0 translate-middle-x"
          href="#"
        >
          Gowther - &copy; {new Date().getFullYear()}
        </a>
      </div>
    </nav>
  );
};

export default Footer;
