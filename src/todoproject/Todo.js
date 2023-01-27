import React, { useState, useEffect } from "react";
import image1 from "../images/todo.jpg";
import { RxTrash } from "react-icons/rx";

const getLocalData = () => {
  let listData = localStorage.getItem("lists");

  if(listData){
    return JSON.parse(localStorage.getItem("lists"));
  }else{
    return [];
  }
}


const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());

      

  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // delete Items
  const deleteItem = (id) => {
    console.log(id);
    const updateItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateItems);
  };

  // removeAll
  const removeAll = () => {
    setItems([]);
  };

  //add data in localstorage
  useEffect(() => {
  localStorage.setItem("lists", JSON.stringify(items));

  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={image1} alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa-sharp fa-solid fa-plus"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            { items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>

                  <RxTrash
                    className="delet-icon"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  />
                </div>
              );
            })}

           

            {/* {clear all button} */}
            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Remove All"
                onClick={removeAll}
              >
                <span>CHECK LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
