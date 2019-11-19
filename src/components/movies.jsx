import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDelete(movie) {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  }
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.numberInStock}</td>
              <td>
                <i onLike={this.handleLike} className="fa fa-heart-o"></i>
              </td>
              <td>
                <button
                  onClick={() => this.handleDelete(movie)}
                  className="btn btn-danger btn-sm m-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
