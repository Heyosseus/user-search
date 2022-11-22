import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import Card from './components/Card/Card';
import {lightTheme, darkTheme, GlobalStyles} from './Themes'

import { useState } from 'react';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

function App() {
   const [lightMode, setLightMode] = useState(true);

  // const toggleTheme = ()=>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
  return (
    <body>
      <GlobalStyle />
      <Main lightMode={lightMode}>
        <div className="container">
          <Header lightMode={lightMode} setLightMode={setLightMode} />
          <SearchBar
            lightMode={lightMode}
            setLightMode={setLightMode}
          />
          <Card lightMode={lightMode} setLightMode={setLightMode} />
        </div>
      </Main>
    </body>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.lightMode ? '#F6F8FF' : '#141d2f'};
  }
`

const Main = styled.body`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#141d2f')};
  color: ${(props) => (props.lightMode ? '#4B6A9B' : 'white')};
  @media (min-width: 700px) {
    width: 700px;
    padding: 20px 63px;
  }
  @media (min-width: 1240px) {
    width: 100%;
    height: 100%;
    padding: 20px 355px;
  }
`;