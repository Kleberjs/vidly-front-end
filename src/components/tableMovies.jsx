import React from "react";
import Table from "./common/table";
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
    <Table
      data={movies}
      currentSort={currentSort}
      columns={columns}
      onSort={onSort}
    />
  );
};

export default TableMovies;
