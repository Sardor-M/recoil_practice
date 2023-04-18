import React from "react";

function ToDoItem({ item }) {
  const [toDoList, setToDoList] = useRecoilState(todoListState);
  const index = toDoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      text: value,
    });
    setToDoList(newList);
  };
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setToDoList(newList);
  };
  const replaceItemAtIndex = (arr, index, newValue) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(toDoList, index);
    setToDoList(newList);
  };
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  return (
    <div>
      <p>To-Do List Inputs</p>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default ToDoItem;
