import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList";
import { RecoilRoot, useRecoilValue } from "recoil";
import { ThemeProvider } from "@emotion/react";
import { ColorModeProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
