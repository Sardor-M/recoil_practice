import React from "react";
import toDoListStatsState from "./ToDoListStateSelector";

function ToDoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(toDoListStatsState);

  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
}
export default ToDoListStats;
