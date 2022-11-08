import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              {<Like liked={movie.liked} onClick={() => onLike(movie)} />}
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// class MoviesTable extends Component {
//   columns = [
//     {
//       path: "title",
//       label: "Title",
//       content: (movie) => (
//         <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
//       ),
//     },
//     { path: "genre.name", label: "Genre" },
//     { path: "numberInStock", label: "Stock" },
//     { path: "dailyRentalRate", label: "Rate" },
//     {
//       key: "like",
//       content: (movie) => (
//         <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
//       ),
//     },
//     {
//       key: "delete",
//       content: (movie) => (
//         <button
//           onClick={() => this.props.onDelete(movie)}
//           className="btn btn-danger btn-sm"
//         >
//           Delete
//         </button>
//       ),
//     },
//   ];

//   render() {
//     const { movies, onSort, sortColumn } = this.props;

//     return (
//       <Table
//         columns={this.columns}
//         sortColumn={sortColumn}
//         onSort={onSort}
//         data={movies}
//       />
//     );
//   }
// }

export default MoviesTable;
