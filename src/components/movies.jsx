import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import GroupList from "./common/groupList";
import Pagination from "./common/pagination";
import paginate from "./../utils/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageItem: 4,
    currentPage: 1,
    currentSort: { path: "title", order: "asc" },
    currentGenre: { key: "allMovies", name: "AllMovies" }
  };

  componentDidMount() {
    const genres = [{ key: "allMovies", name: "AllMovies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  getDataPagination = () => {
    const {
      movies: allMovies,
      pageItem,
      currentPage,
      currentGenre,
      currentSort
    } = this.state;

    const filtered = currentGenre._id
      ? allMovies.filter(movie => movie.genre._id === currentGenre._id)
      : allMovies;

    const orderBy = _.orderBy(
      filtered,
      [currentSort.path],
      [currentSort.order]
    );

    const movies = paginate(orderBy, pageItem, currentPage);

    return { totalCount: filtered.length, data: movies };
  };

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

  handleSort = currentSort => {
    this.setState({ currentSort });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageItem,
      currentPage,
      currentGenre,
      currentSort
    } = this.state;

    const { totalCount, data: movies } = this.getDataPagination();

    if (allMovies.length === 0) return <p>There are no movies</p>;

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
          <p>There is {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            currentSort={currentSort}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            totalItem={totalCount}
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
