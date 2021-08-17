import React from 'react'
import {createGlobalStyle} from 'styled-components'
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
    <TodoTemplate>ㅎㅇㅎㅇ</TodoTemplate>
    </>
  );
}

export default App;
