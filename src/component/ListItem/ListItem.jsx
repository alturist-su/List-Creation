import React from "react";
import "./ListItem.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ListItem = ({ name, description }) => {
  return (
    <div className="list_item">
      <span>{name}</span>
      <span>{description}</span>

      <div className="arrow">
        <ArrowForwardIcon />
      </div>
    </div>
  );
};

export default ListItem;