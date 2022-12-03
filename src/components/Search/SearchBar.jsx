import React from 'react'
import search from './SearchBar.module.css'
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [error, setError] =useState('')
  //  const [configs, setConfigs] = useState([]);

  //  useEffect(() => {
  //    fetchData();
  //  }, []);

   const fetchData = () => {
     axios.get(`https://api.github.com/users/${props.user}`).then((res) => {
       const users = res.data;
       
       console.log({ users });
       props.setConfigs(users);
       console.log(users.name);
       
     }).catch("No results");
   };

  
  return (
    <div className={search.container}>
      <div>
        <Form action="" className={search.form} lightMode={props.lightMode}>
          <div className={search.img}></div>
          <Input
            type="text"
            className={search.input}
            placeholder="Search GitHub username…"
            lightMode={props.lightMode}
            onChange={e=>props.setUser(e.target.value)}
          />
          <div className={search.error}>{error}</div>
          <button onClick={fetchData} className={search.button}>
            Search
          </button>
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
  ::placeholder{
    color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")}
`;
