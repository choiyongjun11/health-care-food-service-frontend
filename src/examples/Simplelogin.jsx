
import React, {useState} from "react";
import styled from "styled-components";

// 로그인 기본 폼 구조 살펴보자.
// 25.4.16 login 연습문제
export default function SimpleLogin () {

//1.useState를 사용하여 email과 password라는 상태를 만들어야 합니다.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//2.사용자가 입력할 때 마다 상태를 업데이트 해주는 핸들러 함수를 구현해야 합니다.

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 사용자가 입력한 email 값을 상태에 저장한다.
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); //사용자가 입력한 password 값을 상태에 저장한다.
  };




  return (

    <>
    <div>

    <h2>로그인 </h2>
    {/*3.input 요소에 value와 onchange를 연결하여 양방향 바인딩을 만듭니다.  */}
    <input
    type = "email"
    placeholder="이메일을 입력하세요"
    value={email}
    onChange={handleEmailChange}
    />
    <br/>
    
    <input
      type="password"
      placeholder="비밀번호를 입력하세요요"
      value={password}
      onChange={handlePasswordChange}
    />

    </div>
    
    
    </>
  );
}