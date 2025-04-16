import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import PageLayout from "../components/layout/Pagelayout";

//useState - 새로고침 하지 않아도 동적으로 페이지가 변화도록 도와주는 컴포넌트
/*

요구사항)
- 이메일, 비밀번호는 필수 입력이며 공백이 포함되면 "다시 입력해주세요" 라는 메시지를 제공해야 한다.

1.이메일 입력 규칙
- 이메일 형식이 올바른지 확인해야 한다.
- 이메일 아이디는 6~12자 길이여야 하며 영문과 숫자만 사용 가능하다.
- 사용자가 이메일을 입력하면 도메인 자동완성 기능을 제공한다.(예: @naver.com, @gmail.com, @daum.net)
- 이미 등록된 이메일일 경우, "해당 이메일을 사용하는 계정이 이미 존재합니다." 메시지를 제공해야 한다.
- 관리자는 이메일 아이디로 사용하며 "admin@도메인주소"로 이메일을 가져야 한다.

2. 비밀번호 입력 규칙
- 비밀번호는 6~20자 이내여야 하며 숫자와 영문자 중 최소 1가지 이상 포함해야 한다.

3. 회원가입 폼 제공
- 사용자가 쉽게 입력할 수 있도록 입력 필드 내에 설명 문구(Placeholder)를 제공해야 한다.
- 이메일 아이디 (6~12자, 영문·숫자 사용 가능) 비밀번호 (6~20자, 숫자·영문자 최소 1개 포함) 규칙을 제공한다.
4. 가입 완료 처리
- 필수 입력값이 누락되면 가입이 불가능해야 한다.
- 모든 입력값이 충족되면 [가입하기] 버튼이 활성화된다. [가입하기] 버튼을 누르면 회원 정보가 등록되어야 한다

5. 기본 로그인 기능
- 사용자가 이메일과 비밀번호를 입력하여 로그인할 수 있어야 한다.
- 로그인 성공 시, 사용자는 메인 페이지(Home) 로 자동 이동해야 한다.

6. 로그인 실패 처리
- 이메일 또는 비밀번호가 일치하지 않으면 "이메일 또는 비밀번호를 다시 확인해주세요." 라는 안내 메시지를 제공해야 한다.
- 입력 필드를 초기화하고 사용자가 다시 입력할 수 있도록 빈칸으로 만들어야 한다.

7. 아이디 저장 버튼을 구현해야 한다.

8. 아이디 찾기 기능 버튼을 구현해야 한다.

9. 비밀번호 찾기 기능
- 로그인 페이지에 [비밀번호 찾기] 버튼을 제공해야 한다.
- 사용자가 이메일을 입력하고 요청하면 비밀번호 재설정 이메일을 발송해야 한다.
- 존재하지 않는 이메일을 입력하면 "등록되지 않은 이메일입니다." 라는 메시지를 제공해야 한다.

10. 회원 가입 기능 버튼을 구현해야 한다.
*/


//user 더미데이터
const Users = [
 {
    email: "abc@gmail.com",
    password: "abc123"
 },

 {

    email: "test123@naver.com",
    password: "test123",
 },

 {
    email: "admin@gmail.com",
    password: "admin123",
 },

];


const domains = ["@gmail.com", "@naver.com", "@daum.net"] //도메인 목록

export default function Login() {

  //상태 관리를 위해 useState 훅을 사용한다.


  const [email, setEmail] = useState(""); //비어있는 상태로 이메일을 저장하는 변수를 생성한다.
  const [password, setPassword] = useState(""); // 비어있는 상태로 비밀번호를 저장하는 변수를 생성한다.

  


  return (
    <>
    <PageLayout>

      <h1>hello Login~</h1>

      





    </PageLayout>
    
  </>


  );
}