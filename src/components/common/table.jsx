import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, currentSort, onSort, data }) => {
  return (
    <table className="table">
      <TableHeader
        columns={columns}
        currentSort={currentSort}
        onSort={onSort}
      />
      <TableBody items={data} columns={columns} />
    </table>
  );
};

export default Table;
