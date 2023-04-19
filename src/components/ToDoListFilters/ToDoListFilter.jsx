import React from "react";
import { todoListFilterState, todoListState } from "../Recoil/todoListState";

function ToDoListFilter() {
  const filteredToDoListState = selector({
    key: "filteredTodoListState",
    get: ({ get }) => {
      const filter = get(todoListFilterState);
      const list = get(todoListState);

      switch (filter) {
        case "Show Completed":
          return list.filter((item) => item.isComplete);
        case "Show Uncompleted":
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });

  return <div>ToDoListFilter</div>;
}

export default ToDoListFilter;
