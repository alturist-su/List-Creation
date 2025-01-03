import React from "react";
import "./ListItem.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ListItem = ({ list_id, list_number, name, description, setListItemsIn3 }) => {

  const handleAddListItemsTo3Container = () => {
    setListItemsIn3((prevListItemsIn3) => [...prevListItemsIn3, { list_id, list_number: 3, name, description }]);
  }

  return (
    <div className={`list_item ${list_number === 2 ? 'reverse' : ''}`}>
      {list_number === 2 && (
        <div className="arrow left-arrow" onClick={handleAddListItemsTo3Container}>
          <ArrowBackIcon />
        </div>
      )}
      <div className="item_info">
        <span>{name}</span>
        <span>{description}</span>
      </div>
      {list_number === 1 && (
        <div className="arrow right-arrow" onClick={handleAddListItemsTo3Container}>
          <ArrowForwardIcon />
        </div>
      )}
    </div>
  );
};

export default ListItem;