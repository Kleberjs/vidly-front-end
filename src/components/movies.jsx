import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Like from "./common/like";
import GroupList from "./common/groupList";
import Pagination from "./common/pagination";
import paginate from "./../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageItem: 4,
    currentPage: 1,
    currentGenre: { key: "5b21ca3eeb7f6fbccd471818", name: "Action" }
  };

  componentDidMount() {
    const genres = [{ key: "", name: "AllMovies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m !== movie);

    this.setState({ movies });

    const pages = Math.ceil(movies.length / this.state.pageItem);

    if (this.state.currentPage > pages)
      this.handlePaginate(this.state.currentPage - 1);
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

  handleGenre = currentGenre => {
    this.setState({ currentGenre });
  };

  render() {
    const {
      movies: { length: countMovies },
      movies: allMovies,
      genres,
      pageItem,
      currentPage,
      currentGenre
    } = this.state;

    if (allMovies.length === 0) return <p>There are no movies</p>;

    const movies = paginate(allMovies, pageItem, currentPage);

    return (
      <div className="row">
        <div className="col-2">
          <GroupList
            itens={genres}
            currentItem={currentGenre}
            onItemHandle={this.handleGenre}
          />
        </div>
        <div className="col">
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
      </div>
    );
  }
}

export default Movies;
