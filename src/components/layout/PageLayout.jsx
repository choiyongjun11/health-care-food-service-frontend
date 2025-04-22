import React from "react";
import styled from "styled-components";
import Header from "./Header2";
import Footer from "./Footer";

const Wrapper = styled.section`
  

  max-width: 1920px;
  
  font-family: 'Noto Sans KR', sans-serif;
  //background-color: #a2de43;



  @media (max-width: 1200px) {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }

`;

function PageLayout({children}) {
  return (
    <>
      <Header/>
      <Wrapper>{children}</Wrapper>
      <Footer/>    
    </>

  );
}

export default PageLayout;