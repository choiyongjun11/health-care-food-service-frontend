//홈페이지 윗 상단의 헤더라인에는 우리 사이트의 로고 이미지가 들어 있어야 합니다. 또한 image 를 눌렀을 때 main 페이지로 들어 올 수 있도록 만들어야 합니다.

// 토글 방식 입니다.
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../../assets/ph_plant.png';
import { Menu, X } from "lucide-react";

//상단 헤더 컨테이너
const HeaderContainer = styled.header`
  width: 100%;
  background-color: #71B700;
  border-bottom: 1px solid #ddd; //아래 라인
  
`;


//내부 컨텐츠 (로고 + 메뉴)
const InnerWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto; //밖에 여백
  padding: 10px 60px; //내부 여백
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    padding: 10px 20px;
    flex-direction: column; // 클릭 시 column 별로 출력하기
    align-items: flex-start; //햄버거 좌측에서 시작
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px; //로고 이미지와 텍스트 간 간격
  text-decoration: none; //밑줄 제거거
`;

const LogoImage = styled.img`
  height: 40px;
`;

const LogoText = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: #333;
`;

//메뉴 공통 스타일 (중앙/ 우측 공통)
const MenuLink = styled(Link)`
  text-decoration: none; //밑줄 제거기
  font-weight: 500;
  font-size: 1rem;
`;

// 소개, 건강목표, 음식, 마트, 대시보드 - 중앙메뉴
const CenterMenu = styled.nav`
  display: flex;
  gap: 2rem;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;

  ${MenuLink} { //메뉴의 색은 흐린 회색
    color: #555;
  }

  ${MenuLink}:hover { //마우스 오버 시 검정 및 굵은 글씨로 변경
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    margin-top: 1rem;
    align-self: flex-start;
  }
`;

//홈, 로그인, 회원가입 - 우측 메뉴
const RightMenu = styled.nav`
  color: black;
  display: flex;
  gap: 20px;

  ${MenuLink} {
    color: black;
  }
  
  //줄였을 때 오른쪽으로 정렬렬
  @media (max-width: 768px) {
    
    flex-direction: column;
    align-self: flex-end;
    align-items: flex-end; 
  }

`;

//모바일용 햄버거 버튼
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


//false 이면 메뉴가 닫혀야함.
//true 이면 메뉴가 열려야 함
//const [menuOpen, setMenuOpen] = useState(false);
// 처음 화면에서 메뉴가 닫혀있어야 하기에 선언  (default 값)
//menuOpen ? T: F 삼항연산자 사용
//{menuOpen ? <X size={24} /> : <Menu size={24} />}
// menuOpen ===true 이면 x 닫기 아이콘, menuOpen ===false 이면 햄버거 아이콘 표시

function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    
    <HeaderContainer>
      <InnerWrapper>
        <Logo to="/">
          <LogoImage src={logo} alt="VITA 로고"/>
          <LogoText> VITA 건강 식단</LogoText>
        </Logo>

        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />} 
        </MenuToggle>

        <CenterMenu open={menuOpen}>
          <MenuLink to="/about">소개</MenuLink>
          <MenuLink to="/healthtarget">건강목표</MenuLink>
          <MenuLink to="/foods">음식</MenuLink>
          <MenuLink to="/markets">식재료 마트</MenuLink>
          <MenuLink to="/dashboard">대시보드</MenuLink>
        </CenterMenu>

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