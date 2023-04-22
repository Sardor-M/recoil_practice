import React from "react";
import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../Recoil/todoListState";

export const filteredToDoListState = selector({
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

export const toDoListStatsState = selector({
  key: "ToDoListStats",
  get: ({ get }) => {
    const toDoList = get(todoListState);
    const totalNum = toDoList.length;
    const totalCompletedNum = toDoList.filter(
      (item) => item.isCompleted
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
