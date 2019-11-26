import React from "react";

const Like = ({ item, onLike }) => {
  return (
    <i
      style={{cursor:"pointer"}}
      onClick={() => onLike(item)}
      className={item.isLike ? "fa fa-heart" : "fa fa-heart-o"}
    ></i>
  );
};

export default Like;
