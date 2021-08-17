import React from 'react'
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
body{
  background:lightgray;
}

`

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <div className="App">ㅎㅇㅎㅇ</div>
    </>
  );
}

export default App;
