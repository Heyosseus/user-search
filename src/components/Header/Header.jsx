import React from "react";
import header from "./Header.module.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../Themes";

import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";

const Header = (props) => {
  const [theme, setTheme] = useState("light");
  

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className={header.header}>
        <Divfinder className={header.paragraph} lightMode={props.lightMode}>
          devfinder
        </Divfinder>

        <LightMode
          onClick={() => {
            props.setLightMode(!props.lightMode);
          }}
        >
          {props.lightMode ? "DARK" : "LIGHT"}
          <img src={props.lightMode ? moon : sun} alt="sun" />
        </LightMode>
        {/* <div className={header.dark__moon} onClick={toggleTheme}>
           <div className={header.dark}>Dark</div>
           <div className={header.img}></div>
         </div> */}
      </div>
    </ThemeProvider>
  );
};

export default Header;

const LightMode = styled.div`
  font-weight: 700;
  letter-spacing: 2.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: "Space Mono", monospace;
  font-size: 13px;
`;

const Divfinder = styled.div`
  color: ${(props) => (props.lightMode ? "#2B3442" : "white")};
`;
