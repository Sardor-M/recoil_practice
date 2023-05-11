import React from "react";
import { useRecoilValue } from "recoil";
import { filteredToDoListState } from "../Selector/Selector";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoItemCreator } from "../ToDoItemCreator/ToDoItemCreator";
import { ToDoListFilters } from "../ToDoListFilters/ToDoListFilters";
import { ToDoListStats } from "../ToDoListStats/ToDoListStats";
import { ToDoListTable } from "../ToDoListTable/ToDoListTable";

export function ToDoList() {
  const todoList = useRecoilValue(filteredToDoListState);
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ToDoListTable />
      <ToDoListFilters />
      <ToDoItemCreator />
      {todoList.map((todoItem) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
