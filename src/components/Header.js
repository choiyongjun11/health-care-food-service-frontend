//홈페이지 윗 상단의 헤더라인에는 우리 사이트의 로고 이미지가 들어 있어야 합니다. 또한 image 를 눌렀을 때 main 페이지로 들어 올 수 있도록 만들어야 합니다.

import React from "react";
import styled  from "styled-components";
import { Link } from "react-router-dom";
import logo from '../assets/ph_plant.png';


//전체 헤더 컨테이너
const HeaderContainer = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
  background-color: #88cc88;

`;

const Left = styled(Link)`
 display: flex;
 align-items: center;
 text-decoration: none; //밑줄 x

`;

const LogoImage = styled.img`
  
  height: auto;
  margin-right: 10px;
`;

const LogoText = styled.span`

  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Right = styled.nav`
  display: flex;
  gap: 20px;

`;


const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    color : #007acc;
  }

`;

function header () {

  return(
    <HeaderContainer>
      <Left to = "/">
          <LogoImage src={logo} alt="VITA 로고" />
          <LogoText> VITA 건강 식단 추천</LogoText>
      </Left>

     <Right>
      <NavLink to ="/">홈</NavLink>
      <NavLink to = "/login">로그인</NavLink>
      <NavLink to = "/auth">회원가입</NavLink>
     </Right>

    </HeaderContainer>

  );

};

export default header;

