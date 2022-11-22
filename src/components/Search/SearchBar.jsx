import React from 'react'
import search from './SearchBar.module.css'
import styled from 'styled-components';
const SearchBar = (props) => {
  return (
    <div className={search.container}>
      <div>
        <Form
          action=""
          className={search.form}
          lightMode={props.lightMode}
        >
          <div className={search.img}></div>
          <Input
            type="text"
            className={search.input}
            placeholder="Search GitHub username…"
            lightMode={props.lightMode}
          />
          <button className={search.button}>Search</button>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar

const Form = styled.div`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#1e2a47')};
  
`;
const Input = styled.input`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#1e2a47")};
  color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
`
// const Placeholder = styled.placeholder`
//   color: ${(props) => (props.lightMode ? '#4B6A9B' : 'white')};
// `;