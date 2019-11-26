import React from "react";
import _ from "lodash";

const TableBody = ({ items, columns }) => {
  const renderCell = (item, col) => {
    if (col.content) return col.content(item);

    return _.get(item, col.path);
  };

  return (
    <tbody>
      {items.map(item => (
        <tr key={item._id}>
          {columns.map(col => (
            <td key={col.path || col.key}>{renderCell(item, col)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
