import React from 'react';
import card from './Card.module.css';
import styled, { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Card = (props) => {
 

  return (
    <Container lightMode={props.lightMode} className={card.container}>
      <div className={card.img}></div>
      <div>
        <div className={card.heading}>
          <WhiteContent
            lightMode={props.lightMode}
            className={card.name}
          >
            Rati Rukhadze
          </WhiteContent>
          <WhiteContent
            lightMode={props.lightMode}
            className={card.join}
          >
            Joined 25 Jan 2011
          </WhiteContent>
        </div>
        <p className={card.username}>@Heyosseus</p>
        <p className={card.paragraph}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Donec odio. Quisque volutpat mattis eros.
        </p>
        <CardInfo
            lightMode={props.lightMode}
          className={card.info__container}
        >
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
                <WhiteContent
                  lightMode={props.lightMode}
                  className={card.location}
                ></WhiteContent>
                <WhiteContent
                  lightMode={props.lightMode}
                  className={card.place}
                >
                  Tbilisi
                </WhiteContent>
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
        </CardInfo>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#1e2a47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

const CardInfo = styled.div`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#141D2F')};
`;

const WhiteContent = styled.div`
  color: ${(props) => (props.lightMode ? '#4B6A9B' : 'white')};
`;
