import React from 'react'
import {createGlobalStyle} from 'styled-components'
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
const GlobalStyle = createGlobalStyle`
body{
  background:lightgray;
}

`

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <TodoTemplate>
      <TodoHead></TodoHead>
      <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
