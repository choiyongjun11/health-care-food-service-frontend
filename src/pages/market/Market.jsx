import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/layout/Pagelayout";


const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;

  padding: 0 10rem;
  padding-top: 2rem;
  
`;

export default function Market() {

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



  return (

    <PageLayout>

    <Title>마켓 작업 대기중</Title>
    

    </PageLayout>

    
    
    

  );
};