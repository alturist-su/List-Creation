import React, { useState } from "react";
import "./ListContainer.css";
import ListItem from "../ListItem/ListItem";

const ListContainer = ({ listItems, listNumber, isListItemChecked, setIsListItemChecked, setListItemsIn3 }) => {

  const handleCheckboxChange = () => {
    setIsListItemChecked(!isListItemChecked);
  };

  return (
    <div className="list_container">
      <div className="list_header">
        <input
          type="checkbox"
          name="list"
          checked={isListItemChecked}
          onChange={handleCheckboxChange}
        />
        <span>{`list ${listNumber}  (${listItems.length})`}</span>
      </div>
      <div className="list_items">
        {listItems.map((eachItem) => (
          <ListItem key={eachItem.id} list_id={eachItem.id} list_number={eachItem.list_number} name={eachItem.name} description={eachItem.description} setListItemsIn3={setListItemsIn3} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;