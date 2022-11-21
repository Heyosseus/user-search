import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Search/SearchBar';
import Card from './components/Card/Card';
import {lightTheme, darkTheme, GlobalStyles} from './Themes'

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';

function App() {
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = ()=>{
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
  return (
    <div>
      
      <div className="container">
        <Header/>
        <SearchBar/>
        <Card />
      </div>
    </div>
  );
}

export default App;
