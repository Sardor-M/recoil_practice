import React from "react";

const toDoListStatsState = {
  key: toDoListStats,
  get: ({ get }) => {
    const toDoList = get(toDoListState);
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
};

export default toDoListStatsState;
