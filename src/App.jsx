import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 30vh;
//   background: ;
//   color: white;
//   font-family: sans-serif;
//   margin: 0;
// `;
