import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../Recoil/todoListState";

function ToDoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show all"> All</option>
        <option value="Sho completed"> Show Completed</option>
        <option value="Show uncompleted"> Uncompleted</option>
      </select>
    </>
  );
}

export default ToDoListFilters;
