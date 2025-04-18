// import React, { useState, useRef } from "react"; //state -상태변경, useRef - 자동 포커스
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom"; //화면 이동
// const Container = styled.div`
//   max-width: 600px;
//   margin: 1rem auto;
//   padding: 0.5rem;
//   background-color: #8fd0a9; 
//   border-radius: 8px;
// `;

// const Title = styled.h1`
//   text-align: center;
//   margin-bottom: 1rem;
//   font-size: 1.8rem;
//   border-bottom: 2px solid #333;
//   padding-bottom: 1rem;
//   letter-spacing: 10px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;

// `;

// const FormGroup = styled.div`
  
//   margin-bottom:1rem;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-weight: bold;


// `;

// const Input = styled.input`
//   width: 30%;
//   height: 40px;
  
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;

// `;

// const Optionalmessage = styled.p`

// `;

// const Button = styled.button`
  
//   padding: 7px;
//   color:black;
//   font-size: 1.5rem;
//   font-weight: bold;
//   border: none;
//   border-radius: 4px; 

//   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//   background-color: ${({ disabled }) => (disabled ? "#c6c6c6" : "#35995d")};
//   transition: background-color 0.3s ease; //부드러워 보이는 효과

// `;


// export default function Sigintest() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [birthday, setBirthday] = useState('');
 
//   //전화번호 각 필드 자동 포커스 이동 기능
//   const [tel1, setTel1] = useState("010");
//   const [tel2, setTel2] = useState("");
//   const [tel3, setTel3] = useState("");
//   const phoneNumber = `${tel1}-${tel2}-${tel3}`;

//   const tel2Ref = useRef(null); //자동 포커스
//   const tel3Ref = useRef(null);

//   //필드에 값 입력 시 버튼 색상 활성화 기능
//   const isActive = email.trim() !== "" && password.trim() !== "" &&
//   username.trim() !== "" && birthday.trim() !=="";

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value); // 사용자가 입력한 email 값을 상태에 저장
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value); //사용자가 입력한 password 값을 상태에 저장
//   };


//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value); //사용자가 입력한 username 값을 상태에 저장
//   }

//   const handleBirthdayChange = (e) => {
//     setBirthday(e.target.value); //사용자가 입력한 birthday 값을 상태에 저장
//   }

//   const handleTel1Change = (e) => {
//     const value = e.target.value.replace(/\D/g, ""); // 숫자만
//     setTel1(value);
//     if (value.length === 3) {
//       tel2Ref.current.focus();
//     }
//   };

//   const handleTel2Change = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setTel2(value);
//     if (value.length === 4) {
//       tel3Ref.current.focus();
//     }
//   };

//   const handleTel3Change = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     setTel3(value);
//   };



// //test1)
//   // const handleSubmit = async (e) => {

//   //   e.preventDefault(); //페이지 새로고침 방지
//   //   console.log('이메일', email);
//   //   console.log('비밀번호', password);
//   //   console.log('이름',username);
//   //   console.log('생년월일',birthday);
//   //   console.log('휴대전화번호',phoneNumber);

//   //     fake 서버 응답 흉내내기
//   //     setTimeout(() => {
//   //       console.log("임시 회원가입 성공");
//   //       navigate("/login");
//   //     }, 1001);
//   //   };

// //test2)
//       const handleSubmit = async (e) => {
//         e.preventDefault();
      
//         try {
//           const request = await fetch("http://localhost:3001/users", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               email,
//               password,
//               username,
//               birthday,
//               phoneNumber,
//             }),
//           });
      
//           if (request.ok) {
//             console.log("회원가입 성공! (json-server)");
//             navigate("/login");
//           } else {
//             alert("회원가입 실패 (json-server)");
//           }
//         } catch (error) {
//           console.error("에러 발생:", error);
//           alert("서버 연결 실패");
//         }
//       };

//   return (
    
//     <Container>

//       <Title>회원가입</Title>
//     <Form onSubmit={handleSubmit}>

//     <FormGroup>
//       <Label htmlFor="email">아이디(6~12자, 영문·숫자 사용 가능)</Label>
//         <Input
//         id="email"
//         type="email"
//         placeholder="아이디"
//         value={email}
//         onChange={handleEmailChange}
//         />
      
//     </FormGroup>


//     <FormGroup>
//         <Label htmlFor="password">비밀번호(6~20자, 숫자·영문자 최소 1개 포함)</Label>
//         <Input
//         id="password"
//         type="password"
//         placeholder="비밀번호"
//         value={password}
//         onChange={handlePasswordChange}
//         />
      
//     </FormGroup>


//     <FormGroup>
//         <Label htmlFor="username">이름(홍길동)</Label>
//         <Input
//         id="username"
//         type="text"
//         placeholder="이름"
//         value={username}
//         onChange={handleUsernameChange}
//         />
      
//     </FormGroup>

//       <FormGroup>
//       <Label htmlFor="birthday">생년월일</Label>
//         <Input
//         id="birthday"
//         type="date"
//         value={birthday}
//         onChange={handleBirthdayChange}
        
//         />
      
//       </FormGroup>

//       <FormGroup>
//       <Label htmlFor="phone">휴대전화번호 (숫자만 입력)</Label>
//       <Input id="tel1" type="text" maxLength={3} value={tel1} onChange={handleTel1Change}/>-
//       <Input id="tel2" type="text" maxLength={4} value={tel2} ref={tel2Ref} onChange={handleTel2Change}/>-
//       <Input id="tel3" type="text" maxLength={4} value={tel3} ref={tel3Ref} onChange={handleTel3Change}/>

//       {/* 확인용 */}
//       <p style={{ marginTop: "10px", fontWeight: "bold" }}>입력된 번호: {phoneNumber}</p>
//     </FormGroup>

//       <Button type="submit" disabled={!isActive} >회원가입 완료</Button>

//     </Form>



//     </Container>

//   );

// }
