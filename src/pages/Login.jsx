import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background-color: #8fd0a9; 
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  border-bottom: 2px solid #333;
  padding-bottom: 1rem;
  letter-spacing: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
  
  margin-bottom:1rem;
`;


const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;

`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

`;

const LinkMenu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;

  a {
    font-size: 1rem;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 1rem;
`;

const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 1rem;
`;

const Button = styled.button`
  padding: 10px;
  color:black;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 4px; 
  margin: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#c6c6c6" : "#35995d")};
  transition: background-color 0.3s ease; //부드러워 보이는 효과

`;


const ErrorMessage = styled.p`
  
  color:red;
  font-size: 1rem;

  margin: 2px;
  font-weight: bold;
  
`

export default function Login () {

  // 1. useState를 통해 email과 password라는 상태를 만들어요.
  // 사용자가 입력한 값을 이 상태에 저장합니다.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false); //id 저장

  const isActive = email.trim() !== "" && password.trim() !== "";

  const navigate = useNavigate(); //페이지 이동 훅 선언

  const [errorMesage, setErrorMessage] = useState(''); //에러 메시지 상태 구현

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true }); // 뒤로가기 stack에 안 남김!
    }
  }, [navigate]);


//2.사용자가 입력할 때 마다 상태를 업데이트 해주는 핸들러 함수를 구현해야 합니다. 익명함수(함수를 따로 선언하는 방식)

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 사용자가 입력한 email 값을 상태에 저장
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); //사용자가 입력한 password 값을 상태에 저장
  };


  //4. 로그인 폼을 제출할 때 실행되는 함수입니다.
  //브라우저 기본 동작을 막고, 현재 상태(email, password)를 확인 해보는 용도입니다.

    const handleSubmit = async (e) => {
      e.preventDefault(); //페이지 새로고침 방지
      console.log('이메일:' ,email);
      console.log('비밀번호:',password);

      
    //6.서버에 로그인 요청을 보내기 위한 json 데이터 형식
    const loginData = {
      email: email,
      password: password,
    };
    
    //7. fetch로 post 요청 보내기
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //요청이 json임을 알림
        },
        body:JSON.stringify(loginData), //javascript 객체 -> json 문자열로 변환
      });

      //8. 서버 응답을 json 형태로 파싱
      const result = await response.json();

      if(!response.ok) {
        throw new Error(result.message || "아이디 또는 비밀번호가 올바르지 않습니다.") //throw 를 사용하여 실패 응답이면 바로 catch로 보내버린다.
      }


      //성공처리
      console.log("로그인 성공", result);
      localStorage.setItem("token", result.token);
      localStorage.setItem("userName", result.name);
      navigate("/");


      } catch(error) {
        console.error("로그인 실패", error.message);
        setEmail("");
        setPassword("");
        setErrorMessage("아이디 또는 비밀번호가 잘못 되었습니다.\n아이디와 비밀번호를 정확히 입력해 주세요."); //에러 메시지 표시
  
    }
  

    };

    return (

    <Container>

    <Title> VITA </Title>
    <Form onSubmit={handleSubmit}>
    {/*3.input 요소에 value와 onchange를 연결하여 양방향 바인딩을 만듭니다. */}
    
    <FormGroup>
      <Label htmlFor="email">아이디</Label>
      <Input
      id="email"
      type = "email" //@ 특수문자 포함하게 하는 기능
      placeholder="이메일을 입력하세요"
      value={email}
      onChange={handleEmailChange}
      />
    </FormGroup>

    <FormGroup>
      <Label htmlFor="password">비밀번호</Label>
    <Input
      id="password"
      type="password"
      placeholder="비밀번호를 입력하세요"
      value={password}
      onChange={handlePasswordChange}
      />


      {errorMesage && ( 
      <ErrorMessage>
      {errorMesage.split("\n").map((line, index) => (
        <React.Fragment key = {index}>
          {line}
          <br />
      
        </React.Fragment>
      ))}
      </ErrorMessage>
      )
      }

      {/*errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> - 한문장으로 에러 메시지 발송*/}
    </FormGroup>

    <CheckboxWrapper>
          <Checkbox
            id="saveId"
            type="checkbox"
            checked={saveId}
            onChange={(e) => setSaveId(e.target.checked)}
          />
          <label htmlFor="saveId">아이디 저장</label>
        </CheckboxWrapper>
    {/*5. 로그인 버튼 - 필드에 값이 입력되지 않으면 비활성화 되야 합니다. 삼항 연산자를 사용하여 default - gray색,
     필드에 값이 들어왔을 때 green-color 변경 (!연산자 사용하여 false 일때 비활성화 true 일때 활성화 시키자. */}
    <Button type="submit" disabled={!isActive}>로그인</Button>
    
    </Form>
    <LinkMenu>
        <a href="#">아이디 찾기</a>
        <a href="#">비밀번호 찾기</a>
        <a href="#">회원가입</a>
    </LinkMenu>
  
    </Container>
  );


};