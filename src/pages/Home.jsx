import { useState } from "react";
import Button from "../components/Button";
import FoodList from "../components/FoodList";
import React from "react";
import Header  from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

const PageWrapper = styled.section`
  max-width: 1920px;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #a2de43;

  padding-bottom: 0;
`;

const Title = styled.h1`
  font-size: 15rem;
  letter-spacing: 10rem;
  text-align: center;
  margin: 0 auto;
  max-width: 1600px;
`;
function Home() {


  return (
  <>
      <Header />
      <PageWrapper>
      <Title>VITA</Title>



      </PageWrapper>
      <Footer/>
  </>
  );
}

export default Home;
