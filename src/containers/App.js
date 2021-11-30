import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import CardsContainer from "./CardsContainer/CardsContainer";

const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(90deg, #050018 0%, #002231 51.85%, #001614 100%, #004E44 100%);
        font-family: 'Roboto', Helvetica, sans-serif;
        margin: 0 auto;
        padding: 0 20px;
        max-width: 1040px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }   
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const MainTitle = styled.h1`
  color: #ffffff;
  margin-bottom: 58px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <MainTitle>My Github Repo</MainTitle>
        <CardsContainer />
      </MainContainer>
    </>
  );
}
