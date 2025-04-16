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

const Content = styled.div`
  font-size: 1.2rem;
  text-align: center;
  line-height: 2.2rem;
  margin: 2rem;
`;

const Highlight = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  
`;


function About() {
  return (
  <>
      <PageLayout>
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
          <Highlight>one step to ward your story</Highlight>
      </PageLayout>
  </>
  );
}

export default About;
