//홈페이지 윗 상단의 헤더라인에는 우리 사이트의 로고 이미지가 들어 있어야 합니다. 또한 image 를 눌렀을 때 main 페이지로 들어 올 수 있도록 만들어야 합니다.

import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../../assets/ph_plant.png';
import { Menu } from "lucide-react";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #71B700;
  border-bottom: 1px solid #ddd;
  position: fixed;
  

`;

const InnerWrapper = styled.div`
  max-width: 1600px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
  
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 0.5rem;
  margin-bottom: 1.5rem ; //로고와 메뉴간의 간격두기
`;

const LogoImage = styled.img`
  height: 40px;
`;

const LogoText = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: #333;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  
`;

const HamburgerWrapper = styled.div`
  &:hover nav {
    display: flex;
  }
`;

const CenterMenu = styled.nav`
  display: flex;
  gap: 9rem;
  color: #555;
  margin-top: 1.5rem;


  ${MenuLink} {
    color: #555;
  }

  ${MenuLink}:hover {
    color: #000;
    font-weight: bold;
  }

  //모바일 화면 메뉴 마우스 오버 시 테투리 표시하기기
  @media (max-width: 768px) {
    gap: 2rem;
    display: none;
    flex-direction: column;
    padding: 10px;
  
    border-radius: 10px;
    background-color: #93e06d;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`;

const RightMenu = styled.nav`
  color: black;
  display: flex;
  gap: 20px;
  margin-top: 1.5rem;
  ${MenuLink} {
    color: black;
  }

  //줄였을 때 오른쪽으로 정렬렬
  @media (max-width: 768px) {
    padding: 10px;
    
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-end; 
  }
  
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    
  
  }
`;

function Header () {

  return(
    <HeaderContainer>
      <InnerWrapper>
        <Logo to="/">
          <LogoImage src={logo} alt="VITA 로고"/>
          <LogoText> VITA 건강 식단</LogoText>
        </Logo>

        <HamburgerWrapper>
          <MenuToggle>
            <Menu size={24} />
          </MenuToggle>

          <CenterMenu>
            <MenuLink to="/about">소개</MenuLink>
            <MenuLink to="/healthtarget">건강목표</MenuLink>
            <MenuLink to="/foods">음식</MenuLink>
            <MenuLink to="/markets">식재료 마트</MenuLink>
            <MenuLink to="/dashboard">대시보드</MenuLink>
          </CenterMenu>
        </HamburgerWrapper>

        <RightMenu>
          <MenuLink to="/">홈</MenuLink>
          <MenuLink to="/login">로그인</MenuLink>
          <MenuLink to="/auth">회원가입</MenuLink>
        </RightMenu>
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
