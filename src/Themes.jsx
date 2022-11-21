import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: '#f2f2f2',
  color: '#4B6A9B',
};

export const darkTheme = {
  body: '#141D2F',
  color: '#fff',
};

// export const containerTheme = {
//     container: '#1E2A47',
//     color: 'white'
// }

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${(props) => props.theme.body};
    }
    
         
`;