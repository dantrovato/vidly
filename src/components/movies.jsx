import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 10,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };

  handleLike = (movie) => {
    // this clones the original movies array
    const movies = [...this.state.movies];
    // find index of that object
    const index = movies.indexOf(movie);
    // clone the movie object
    movies[index] = { ...movies[index] };
    // toggle the liked boolean
    movies[index].liked = !movies[index].liked;
    // set state with modified clone of original movies array
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    if (!this.state.movies.length) {
      return <p>There are no movies in the database.</p>;
    }

    const { length: count } = this.state.movies;

    return (
      <React.Fragment>
        <p>There are {count} in the database.</p>
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
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  }
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          movies={this.state.moviesmovies}
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={() => this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
