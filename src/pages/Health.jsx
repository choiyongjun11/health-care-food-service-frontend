import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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


export default function Health() {

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
  


  return(

    <LogoutButtom>버튼</LogoutButtom>

  );


};