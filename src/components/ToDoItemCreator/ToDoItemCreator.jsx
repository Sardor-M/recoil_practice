import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../Recoil/todoListState";

export function ToDoItemCreator() {
  const [inputValue, setInputValue] = React.useState("");
  const setToDoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setToDoList((oldToDoList) => {
      return [
        ...oldToDoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ];
    });
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <p>To-Do List Items</p>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility function to create a unique id
var id = 0;
function getId() {
  return id++;
}
