import React from "react";

// <i class="fa fa-chevron-up" aria-hidden="true"></i>
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

  const handleIcon = (currentSort, path) => {
    if (currentSort.path === path) {
      return currentSort.order === "asc" ? (
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      ) : (
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      );
    }

    return null;
    // <i class="fa fa-chevron-up" aria-hidden="true"></i>
  };
  const icon = <i className="fa fa-chevron-up"></i>;

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            style={{ cursor: "pointer" }}
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
          >
            {column.name}
            {handleIcon(currentSort, column.path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
