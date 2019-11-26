import React from "react";
import _ from "lodash";

const TableBody = ({ items, columns }) => {
  return (
    <tbody>
      {items.map(item => (
        <tr key={item._id}>
          {columns.map(col => (
            <td key={col.path || col.key}>
              {_.get(item, col.path) || col.content(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
