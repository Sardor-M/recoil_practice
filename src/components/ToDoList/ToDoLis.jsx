import React from "react";


function ToDoLis() {
  return (
    <>
      <ToDoItemCreator />
      {todoListState.map((todoItem) => (
        <ToDoC key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default ToDoLis;
