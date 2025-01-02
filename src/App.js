import React, { Fragment, useState } from "react";
import "./App.css";
import ListContainer from "./component/ListContainer";
const API_URL = "https://apis.ccbp.in/list-creation/lists";

function App() {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const createNewList = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setListItems(data.list_items);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loader"> 
          <img className="icon" src="https://cdn.pixabay.com/animation/2022/11/04/09/42/09-42-03-510_512.gif"/>
        </div>
      ) : (
        <Fragment>
          <div className="app_header">
            <h1>List Creation</h1>
            <button className="button" onClick={createNewList}>
              Create a New List
            </button>
          </div>
          <div className="parent-list-container">
            <ListContainer listItems={listItems} />
            <ListContainer listItems={listItems} />
            <ListContainer listItems={listItems} />
            <ListContainer listItems={listItems} />
            <ListContainer listItems={listItems} />
            <ListContainer listItems={listItems} />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
