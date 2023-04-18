import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import { Route, Routes } from "react-router-dom";
import styled, { ThemeConsumer, ThemeProvider } from "styled-components";
import { ColorModeProvider, useColorMode } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  background: ;
  color: white;
  font-family: sans-serif;
  margin: 0;
`;
