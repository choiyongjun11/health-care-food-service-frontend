import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutContainer = styled.section`
  max-width: 1920px;
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #a2de43;
  padding-bottom: 0;
`;

const InnerWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;
    
  }
  @media (max-width: 1199px) {
    padding: 0 24px;
  }
`;

const Title = styled.h1`
  font-size: 15rem;
  letter-spacing: 10rem;
  text-align: center;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  text-align: center;
  margin: 2rem 0;
  padding: 2rem 0;
`;

const Content = styled.div`
  font-size: 1.2rem;
  text-align: center;
  line-height: 2.2rem;
  margin: 2rem 0;
`;

const Highlight = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 2rem 0;
`;

const Mission = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #555;
  text-align: right;
`;

function About() {
  return (
    <>
      <Header />
      <AboutContainer>
        <InnerWrapper>
          <Title>VITA</Title>
          <Subtitle>숨을 들이마시듯, 삶을 그려내다.</Subtitle>
          <Content>
            <p>'vita'는 라틴어로 삶, 생명, 존재의 방식을 뜻합니다.</p>
            <p>우리는 그 단어 속에 우리의 이야기를 담았습니다.</p>
            <p>누군가의 하루, 누군가의 기억, 누군가의 한 끼.</p>
            <p>삶의 결은 모두 다르지만, 그 안엔 늘 작은 따뜻함이 흐릅니다.</p>
            <p>vita는 삶을 살아내는 모두에게, 그 자체로 의미 있는 방식으로 다가갑니다.</p>
            <p>비타민처럼, 조용히. 하지만 분명하게. 우리를 살아가게 하는 것들처럼.</p>
            <p>삶을 향한 한 걸음,</p>
          </Content>
          <Highlight>one step toward your story</Highlight>
          <Mission>당신의 삶에 도움을 주고자 건강한 음식을 추천해주는 플랫폼</Mission>
        </InnerWrapper>
      </AboutContainer>
      <Footer />
    </>
  );
}

export default About;
