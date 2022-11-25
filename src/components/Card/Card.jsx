import React from "react";
import card from "./Card.module.css";
import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {

  return (
    <div className={card.container2}>
    <Container lightMode={props.lightMode} className={card.container}>
      <img src={props.configs.avatar_url} className={card.img} alt='avatar'/>
      <div>
        <div className={card.heading}>
          <WhiteContent lightMode={props.lightMode} className={card.name} className={card.name}>
            {props.configs.name}
            <p className={card.username}>@{props.configs.login}</p>
          </WhiteContent>
          <WhiteContent lightMode={props.lightMode} className={card.join}>
            Joined - {props.configs.created_at}
          </WhiteContent>
        </div>
        <p className={card.paragraph}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <CardInfo lightMode={props.lightMode} className={card.info__container}>
          <div className={card.info__heading}>
            <WhiteContent lightMode={props.lightMode}>Repos</WhiteContent>
            <WhiteContent lightMode={props.lightMode}>Follower</WhiteContent>
            <WhiteContent lightMode={props.lightMode}>Followong</WhiteContent>
          </div>
          <div className={card.info__values}>
            <WhiteContent
              lightMode={props.lightMode}
              style={{ marginRight: "11px" }}
            >
              {props.configs.public_repos}
            </WhiteContent>
            <WhiteContent
              lightMode={props.lightMode}
              style={{ marginRight: "31px" }}
            >
              {props.configs.followers}
            </WhiteContent>
            <WhiteContent
              lightMode={props.lightMode}
              
            >
              {props.configs.following}
            </WhiteContent>
          </div>

          <div className={card.footer}>
            <div className={card.upperLine}>
              <div className={card.firstRow}>
                <div className={card.location}></div>
                <div className={card.place}>
                  {props.configs.location || "Not Available"}
                </div>
              </div>

              <div className={card.secondRow}>
                <div className={card.twitter}></div>
                <p className={card.place}>
                  {props.configs.twitter_username || "Not Available"}
                </p>
              </div>
            </div>
            <div className={card.lowerLine}>
              <div className={card.thirdRow}>
                <div className={card.website}></div>
                <p className={card.place}>
                  {props.configs.repos__url || "Not available"}
                </p>
              </div>

              <div className={card.fourthRow}>
                <div className={card.company}></div>
                <p className={card.place}>
                  {props.configs.company || "Not available"}
                </p>
              </div>
            </div>
          </div>
        </CardInfo>
      </div>
    </Container>
    </div>
  );
};

export default Card;

const Container = styled.div`
  background: ${(props) => (props.lightMode ? '#F6F8FF' : '#1e2a47')};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

const CardInfo = styled.div`
  background: ${(props) => (props.lightMode ? "#F6F8FF" : "#141D2F")};
`;

const WhiteContent = styled.div`
  color: ${(props) => (props.lightMode ? "#4B6A9B" : "white")};
`;
