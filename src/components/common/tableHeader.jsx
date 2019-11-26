import React from "react";

// columns: array
// currentSort: object
// onSort: function

const TableHeader = ({ columns, currentSort, onSort }) => {
  const raiseSort = path => {
    if (currentSort.path === path)
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    else {
      currentSort.path = path;
      currentSort.order = "asc";
    }

    onSort(currentSort); // herdado
  };
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
