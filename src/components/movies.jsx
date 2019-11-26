
/**
 * IMPLEMENTAR O ORDENAMENTO POR: title, genre, stock or rate
 */

import React, { Component } from "react";
import TableMovies from "./tableMovies";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import GroupList from "./common/groupList";
import Pagination from "./common/pagination";
import paginate from "./../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageItem: 4,
    currentPage: 1,
    currentGenre: { key: "allMovies", name: "AllMovies" }
  };

  componentDidMount() {
    const genres = [{ key: "allMovies", name: "AllMovies" }, ...getGenres()];
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
    this.setState({ currentGenre, currentPage: 1 });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageItem,
      currentPage,
      currentGenre
    } = this.state;

    if (allMovies.length === 0) return <p>There are no movies</p>;

    const filtered = currentGenre._id
      ? allMovies.filter(movie => movie.genre._id === currentGenre._id)
      : allMovies;

    const movies = paginate(filtered, pageItem, currentPage);

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
          <p>There is {filtered.length} movies in the database</p>
          <TableMovies movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} />
          <Pagination
            totalItem={filtered.length}
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
