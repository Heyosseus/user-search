import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/Search/SearchBar";
import Card from "./components/Card/Card";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";

import { useState, useEffect } from "react";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import axios from "axios";

function App() {
  const [lightMode, setLightMode] = useState(true);
  const [user, setUser] = useState("");
  const [configs, setConfigs] = useState([]);

  // const toggleTheme = ()=>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
   useEffect(() => {
     fetch("https://api.github.com/users/Heyosseus")
       .then((data) => data.text())
       .then((res) => setConfigs(JSON.parse(res)));
   }, []);

  return (
    <body>
      <GlobalStyle />
      <Main lightMode={lightMode}>
        <div className="container">
          <Header lightMode={lightMode} setLightMode={setLightMode} />
          <SearchBar
            lightMode={lightMode}
            setLightMode={setLightMode}
            user={user}
            setUser={setUser}
            configs={configs}
            setConfigs={setConfigs}
          />
          <Card
            lightMode={lightMode}
            setLightMode={setLightMode}
            user={user}
            setUser={setUser}
            configs={configs}
            setConfigs={setConfigs}
          />
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
    display:flex;
    }
`;

const Main = styled.body`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#141d2f")};
  color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
  @media (max-width: 700px) {
    width: 700px;
    padding: 20px 63px;
  }
  @media (min-width: 1440px) {
    // width: 100%;
    // height: 100%;
    align-items: center;
    display:flex;
    justify-content: center;
  }
`;
