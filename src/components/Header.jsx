//홈페이지 윗 상단의 헤더라인에는 우리 사이트의 로고 이미지가 들어 있어야 합니다. 또한 image 를 눌렀을 때 main 페이지로 들어 올 수 있도록 만들어야 합니다.

import React from "react";
import styled  from "styled-components";
import { Link } from "react-router-dom";
import logo from '../assets/ph_plant.png';

//전체 헤더 컨테이너
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #71B700;
  position: fixed;
`;

//내부 컨텐츠
const InnerWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 0 24px;
    
  }
  @media (min-width: 1024px) {
    padding: 0 32px;
    
  }
  @media (max-width: 1199px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Left = styled(Link)`
 display: flex;
 align-items: center;
 text-decoration: none; //밑줄 x
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: #333;
`;

// 중앙 메뉴
const Center = styled.nav`
  display: flex;
  gap: 80px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #000;
  font-weight: bold;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: black;
`;

const Right = styled.nav`
  display: flex;
  gap: 20px;
  
`;

function Header () {
  return(
    <HeaderContainer>
      <InnerWrapper>

      <Left to = "/">
          <LogoImage src={logo} alt="VITA 로고"/>
          <LogoText> VITA 건강 식단</LogoText>
      </Left>

      <Center>
        <MenuLink to ="/about">소개</MenuLink>
        <MenuLink to = "/healthtarget">건강목표</MenuLink>
        <MenuLink to = "/foods">음식</MenuLink>
        <MenuLink to = "/markets">식재료 마트</MenuLink>
        <MenuLink to = "/dashboard">대시보드</MenuLink>
     </Center>

     <Right>
      <NavLink to ="/">홈</NavLink>
      <NavLink to = "/login">로그인</NavLink>
      <NavLink to = "/auth">회원가입</NavLink>
     </Right>

    </InnerWrapper>
    </HeaderContainer>
  );

};

export default Header;
