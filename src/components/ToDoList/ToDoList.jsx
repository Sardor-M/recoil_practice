import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoItemCreator from "../ToDoItemCreator/ToDoItemCreator";
import { todoListState } from "../Recoil/todoListState";
import { useRecoilValue } from "recoil";
import { createBrowserRouter } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import styled from "styled-components";

function ToDoList() {
  const todoList = useRecoilValue(todoListState);
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ToDoItemCreator />
      {todoList.map((todoItem) => (
        <ToDoItem key={todoItem.id} item={todoItem} />
      ))}
      {/* <header>
        <button type="button" onClick={toggleColorMode}>
          Toggle me {colorMode === "light" ? "Dark" : "Light"}
        </button>
      </header> */}
    </>
  );
}

export default ToDoList;
