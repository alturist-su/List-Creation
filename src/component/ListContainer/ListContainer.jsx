import React from "react";
import "./ListContainer.css";
import ListItem from "../ListItem/ListItem";

class ListContainer extends React.Component {
  render() {
    const { listItems, listNumber } = this.props;

    return (
      <div className="list_container">
        <div className="list_header">
          <input type="checkbox" name="list" />
          <span>{`list ${listNumber}  (${listItems.length})`}</span>
        </div>
        <div className="list_items">
          {listItems.map((eachItem) => (
            <ListItem key={eachItem.id} name={eachItem.name} description={eachItem.description} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListContainer;
