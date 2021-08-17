import React from 'react'
import {createGlobalStyle} from 'styled-components'
import TodoHead from './components/TodoHead';
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
      ㅎㅇㅎㅇ</TodoTemplate>
    </>
  );
}

export default App;
