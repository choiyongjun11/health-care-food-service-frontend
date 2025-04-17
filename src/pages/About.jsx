import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PageLayout from "../components/layout/Pagelayout";
import { useNavigate } from "react-router-dom";



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

const LogoutButtom = styled.button`
  margin: 2rem auto;
  padding: 10px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }


`;


function About() {
  const navigate = useNavigate();
  //const hasAlertedRef = useRef(false); 알림이 여러번 뜨는 걸 방지하고자 처음에 false

  useEffect(() => {
    const token = localStorage.getItem("token");
   // if (!token && !hasAlertedRef.current) {
    if (!token) {
      //handleLogout.current = true; //경고 1회만 실행
      //alert("로그인이 필요합니다.");
      navigate("/login", { replace: true }); // 뒤로가기 stack에 안 남김!
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (

      <PageLayout>

          <LogoutButtom onClick={handleLogout}>로그아웃</LogoutButtom>
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
  
  );
}

export default About;




