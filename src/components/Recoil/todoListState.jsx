import { atom } from "recoil";

// we are creating a list of new objects with a unique id and text property
export const todoListState = atom({
  key: "TodoList",
  default: [],
});

export const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show all",
});
