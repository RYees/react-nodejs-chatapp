import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/75O5.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function naviga() {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
    }
    naviga()
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
    margin-bottom: 20px;
  }
  span {
    color: #f41d1d;
  }
`;