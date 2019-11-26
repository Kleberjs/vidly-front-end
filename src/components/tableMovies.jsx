import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

const TableMovies = ({ movies, currentSort, onLike, onDelete, onSort }) => {
  const columns = [
    { path: "title", name: "Title" },
    { path: "genre.name", name: "Genre" },
    { path: "numberInStock", name: "Stock" },
    { path: "dailyRentalRate", name: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody items={movies} columns={columns} />
      {/* <tbody>
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
      </tbody> */}
    </table>
  );
};

export default TableMovies;
