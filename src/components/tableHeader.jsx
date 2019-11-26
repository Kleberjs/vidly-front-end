import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map(header => (
        <th key={header._id}>{header.name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
