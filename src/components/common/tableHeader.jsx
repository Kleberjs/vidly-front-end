import React from "react";

// <i class="fa fa-chevron-up" aria-hidden="true"></i>
const TableHeader = ({ columns, currentSort, onSort }) => {
  const raiseSort = path => {
    if (currentSort.path === path)
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    else {
      if (path) {
        currentSort.path = path;
        currentSort.order = "asc";
      }
    }

    onSort(currentSort); // herdado
  };

  const renderSortIcon = (currentSort, path) => {
    if (currentSort.path === path) {
      return currentSort.order === "asc" ? (
        <i className="fa fa-sort-asc" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-sort-desc" aria-hidden="true"></i>
      );
    }
    return null;
  };

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
            {renderSortIcon(currentSort, column.path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
