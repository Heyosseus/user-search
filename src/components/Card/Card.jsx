import React from 'react'
import card from './Card.module.css'
import { ThemeProvider } from 'styled-components';
import { containerTheme, GlobalStyles } from '../../Themes';


const Card = () => {
  return (
      <div className={card.container}>
        <div className={card.img}></div>
        <div>
          <div className={card.heading}>
            <p className={card.name}>Rati Rukhadze</p>
            <p className={card.join}>Joined 25 Jan 2011</p>
          </div>
          <p className={card.username}>@Heyosseus</p>
          <p className={card.paragraph}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Donec odio. Quisque volutpat mattis eros.
          </p>

          <div className={card.info__container}>
            <div className={card.info__heading}>
              <p>Repos</p>
              <p>Follower</p>
              <p>Followong</p>
            </div>
            <div className={card.info__values}>
              <div style={{ marginRight: '11px' }}>14</div>
              <div style={{ marginRight: '51px' }}>2</div>
              <div style={{ marginRight: '11px' }}>13</div>
            </div>

            <div className={card.footer}>
              <div className={card.upperLine}>
                <div className={card.firstRow}>
                  <div className={card.location}></div>
                  <p className={card.place}>Tbilisi</p>
                </div>

                <div className={card.secondRow}>
                  <div className={card.twitter}></div>
                  <p className={card.place}>Not Available</p>
                </div>
              </div>
              <div className={card.lowerLine}>
                <div className={card.thirdRow}>
                  <div className={card.website}></div>
                  <p className={card.place}>github link</p>
                </div>

                <div className={card.fourthRow}>
                  <div className={card.company}></div>
                  <p className={card.place}>@github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card