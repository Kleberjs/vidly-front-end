import React from "react";
import Like from "./common/like";

const TableMovies = ({ movies, currentSort, onLike, onDelete, onSort }) => {
  const raiseSort = path => {
    if (currentSort.path === path)
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    else {
      currentSort.path = path;
      currentSort.order = "asc";
    }

    onSort(currentSort);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => raiseSort("title")}>Title</th>
          <th onClick={() => raiseSort("genre.name")}>Genre</th>
          <th onClick={() => raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => raiseSort("dailyRentalRate")}>Rate</th>
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
              <Like onLike={onLike} item={movie} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
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
};

export default TableMovies;
