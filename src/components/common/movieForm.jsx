import React from "react";
import { NavLink } from "react-router-dom";

const Movie = (props) => {
  // debugger;
  return (
    <div>
      <h1>Movie Form {props.location.pathname.replace("/", "")}</h1>
      {/* <h1>Movie Form {props.match.url}</h1> */}
      <NavLink to="/movies">
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </NavLink>
      {/* <button
        className="btn btn-primary"
        onClick={props.history.push("/movies")}
      >
        Shave
      </button> */}
    </div>
  );
};

export default Movie;
