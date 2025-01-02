import React from "react";
import "./ListContainer.css";
import ListItem from "./ListItem";

class ListContainer extends React.Component {


  render() {
    const defaultListItems = [
      { id: "1", name: "name1", description: "description1" },
      { id: "2", name: "name2", description: "description2" },
      { id: "3", name: "name3", description: "description3" },
      { id: "4", name: "name4", description: "description4" },
      { id: "5", name: "name5", description: "description5" },
    ];

    return (
      <div className="list_container">
        <div className="list_header">
          <input type="checkbox" name="list" />
          <span>List Name</span>
        </div>
        <div className="list_items">
          {defaultListItems.map((eachItem) => (
            <ListItem key={eachItem.id} name={eachItem.name} description={eachItem.description} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListContainer;
