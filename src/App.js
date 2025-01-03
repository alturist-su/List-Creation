import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import ListContainer from "./component/ListContainer/ListContainer";
import FailedView from "./component/FailedView/FailedView";

const API_URL = "https://apis.ccbp.in/list-creation/lists";

function App() {
  const [listItems, setListItems] = useState([]);
  const [listItems2, setListItems2] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchListItems = async () => {
      const response = await fetch(API_URL);

      if (!response.ok) {
        console.error("Failed to fetch data");
        setLoading(false);
        return;
      }

      const data = await response.json();
      const lists = data.lists;

      const list1 = [];
      const list2 = [];

      if (Array.isArray(lists)) {
        lists.forEach((item) => {
          if (item.list_number === 1) {
            list1.push(item);
          } else if (item.list_number === 2) {
            list2.push(item);
          }
        });
      }

      setListItems(list1);
      setListItems2(list2);

      setLoading(false);
    };
    fetchListItems();
  }, []);

  const [showThirdList, setShowThirdList] = useState(false);
  const [isListItem1Checked, setIsListItem1Checked] = useState(false);
  const [isListItem2Checked, setIsListItem2Checked] = useState(false);
  const [showFailedView, setShowFailedView] = useState(false);

  const handleCreateNewList = () => {
    if (isListItem1Checked && isListItem2Checked) {
      setShowThirdList(true);
    } else {
      setShowFailedView(true);
    }
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <img
            className="icon"
            src="https://cdn.pixabay.com/animation/2022/11/04/09/42/09-42-03-510_512.gif"
          />
        </div>
      ) : (
        <Fragment>
          <div className="app_header">
            <h1>List Creation</h1>
            <button className="button" onClick={handleCreateNewList}>
              Create a New List
            </button>
          </div>y
          <div className="parent-list-container">
            {showFailedView ? (
              <FailedView setShowFailedView={setShowFailedView} />
            ) : (
              <>
                <ListContainer listItems={listItems} listNumber={1} />
                {showThirdList && (
                  <ListContainer listItems={listItems2} listNumber={3} />
                )}
                <ListContainer listItems={listItems2} listNumber={2} />
              </>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
