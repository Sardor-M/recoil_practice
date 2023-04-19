import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoItemCreator from "../ToDoItemCreator/ToDoItemCreator";
import { todoListState } from "../Recoil/todoListState";
import { useRecoilValue } from "recoil";

function ToDoList() {
  const todoList = useRecoilValue(todoListState);
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ToDoItemCreator />
      {todoList.map((todoItem) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default ToDoList;
