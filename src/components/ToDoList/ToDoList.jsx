import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoItemCreator from "../ToDoItemCreator/ToDoItemCreator";
import { todoListState } from "../Recoil/todoListState";
import { useRecoilValue } from "recoil";
import ToDoListFilter from "../ToDoListFilters/ToDoListFilter";

function ToDoList() {
  const todoList = useRecoilValue(todoListState);
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ToDoItemCreator />
      <ToDoListFilter />
      <ToDoItemCreator />
      {todoList.map((todoItem) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default ToDoList;
