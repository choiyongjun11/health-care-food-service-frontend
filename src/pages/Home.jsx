import React from "react";
import styled from "styled-components";
import PageLayout from "../components/layout/Pagelayout";

const Title = styled.div`
  font-size: 15rem;
  text-align: center;
  letter-spacing: 10rem;
  background-color: #72a71f;
  margin: 0 auto;

`;

const Subtitle = styled.div`
  font-size: 5rem;
  text-align: center;
  margin: 2rem auto;
  
`;

function Home() {


  return (
  <>    
      <PageLayout>
      <Title>VITA</Title>
      <Subtitle>숨을 들이마시듯, 삶을 그려내다.</Subtitle>
      </PageLayout>
  </>

  
  );
}

export default Home;
