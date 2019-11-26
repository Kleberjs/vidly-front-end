import React from "react";

const GroupList = ({ itens, currentItem, onItemHandle }) => {
  return (
    <ul className="list-group">
      {itens.map(item => (
        <li
          style={{ cursor: "pointer" }}
          key={item._id || item.key}
          className={
            item.name === currentItem.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemHandle(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default GroupList;
