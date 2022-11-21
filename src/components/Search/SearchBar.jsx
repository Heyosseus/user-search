import React from 'react'
import search from './SearchBar.module.css'
const SearchBar = () => {
  return (
      <div className={search.container}>
      <div>
        <form action="" className={search.form}>
          <div className={search.img}></div>
          <input type="text" className={search.input} placeholder='Search GitHub username…'/>
          <button className={search.button}>Search</button>
        </form>
          </div>
    </div>
  )
}

export default SearchBar