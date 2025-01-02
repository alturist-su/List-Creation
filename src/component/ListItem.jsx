import React from "react";
import "./ListItem.css";

const ListItem = ({ name, description }) => {
  return (
    <div className="list_item">
      <span>{name}</span>
      <span>{description}</span>
    </div>
  );
};

export default ListItem;