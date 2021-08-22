import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoProvider from "./components/TodoContext";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
const GlobalStyle = createGlobalStyle`
body{
  background:lightgray;
}

`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
