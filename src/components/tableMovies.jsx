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
    { key: "like", content: movie => <Like onLike={onLike} item={movie} /> },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => onDelete(movie)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      )
    }
  ];

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody items={movies} columns={columns} />
    </table>
  );
};

export default TableMovies;
