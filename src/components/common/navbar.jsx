import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLink
            className="nav-link active text-dark"
            aria-current="page"
            to="/movies"
          >
            Movies
          </NavLink>

          <NavLink className="nav-link text-dark" to="/customers">
            Customers
          </NavLink>

          <NavLink className="nav-link text-dark" to="/rentals">
            Rentals
          </NavLink>

          <NavLink className="nav-link text-dark" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
