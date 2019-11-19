import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "./../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    pageItem: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies() });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m !== movie);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].isLike = movie.isLike ? false : true;

    this.setState({ movies });
  };

  handlePaginate = currentPage => {
    this.setState({ currentPage });
  };

  render() {
    const {
      movies: { length: countMovies },
      movies: allMovies,
      pageItem,
      currentPage
    } = this.state;

    if (allMovies.length === 0) return <p>There is no movies yet</p>;

    const movies = paginate(allMovies, pageItem, currentPage);

    return (
      <div>
        <p>There is {countMovies} movies in the database</p>
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
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like onLike={this.handleLike} item={movie} />
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
        <Pagination
          totalItem={countMovies}
          itemPage={pageItem}
          currentPage={currentPage}
          onPaginate={this.handlePaginate}
        />
      </div>
    );
  }
}

export default Movies;
