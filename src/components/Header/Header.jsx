import React from 'react'
import header from './Header.module.css'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../Themes';
import { createContext } from 'react';

export const ThemeContext = createContext(null)
const Header = () => {
    const [theme, setTheme] = useState('light');
    

    const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    };
   return (
     <ThemeProvider
       theme={theme === 'light' ? lightTheme : darkTheme}
     >
       <GlobalStyles />
         <div className={header.header}>
           <p className={header.paragraph}>devfinder</p>
           <div className={header.dark__moon} onClick={toggleTheme}>
             <div className={header.dark}>Dark</div>
             <div className={header.img}></div>
           </div>
         </div>
     </ThemeProvider>
   );
}

export default Header