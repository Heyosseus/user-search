import React from 'react'
import header from './Header.module.css'
const Header = () => {
  return (
      <div>
          <div className={header.header}>
              <p className={header.paragraph}>devfinder</p>
              <div className={header.dark__moon}>
                <div className={header.dark}>Dark</div>
                <div className={header.img}></div>
              </div>
              

          </div>
    </div>
  )
}

export default Header