import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 3rem;
  background-color: #8fd0a9; 
  border-radius: 8px;
`;

const Title = styled(Link)`
  
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  letter-spacing: 15px;

  display: block;
  text-align: center;
  margin-bottom: 1.5rem; 
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem; 
  margin-top: 1rem; 
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
  
`;

export default function Login () {

  // 1. useState를 통해 email과 password라는 상태를 만들어요.
  // 사용자가 입력한 값을 이 상태에 저장합니다.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [saveId, setSaveId] = useState(false); //id 저장
  const [errorMessage, setErrorMessage] = useState(''); //에러 메시지 상태 구현
  const navigate = useNavigate(); //페이지 이동 훅 선언



  const isActive = email.trim() !== "" && password.trim() !== "";


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true }); //뒤로 가기 누르게 하기
    }

    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setSaveId(true);
    }
  }, [navigate]);


//2.사용자가 입력할 때 마다 상태를 업데이트 해주는 핸들러 함수를 구현해야 합니다. 익명함수(함수를 따로 선언하는 방식)

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // 사용자가 입력한 email 값을 상태에 저장
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); //사용자가 입력한 password 값을 상태에 저장
  };

  //아이디 저장 기능
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setSaveId(true);
    }
  }, []);

  //4. 로그인 폼을 제출할 때 실행되는 함수입니다.
  //브라우저 기본 동작을 막고, 현재 상태(email, password)를 확인 해보는 용도입니다.
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = { email, password };

    try {
      const response = await axios.post ("http://localhost:8080/auth/login", loginData);
      console.log("로그인 응답:", response.data);

      // 응답 구조에 따라 유연하게 처리
      const data = response.data?.data ?? response.data;
      console.log(response.headers)
      const accessToken = response.headers["authorization"];
      const { token, email: userEmail, memberId } = data;
      
      if (!memberId) {
      throw new Error("응답에 사용자 ID가 없습니다.");
      }

        // 로컬스토리지에 저장
      localStorage.setItem("token", accessToken);
      localStorage.setItem("email", userEmail);
      localStorage.setItem("userId", memberId.toString());


      alert("로그인 완료");
      navigate("/");

    } catch (error) {
      console.error("로그인 실패: ", error);
      setEmail("");
      setPassword("");
      setErrorMessage("아이디 또는 비밀번호가 잘못되었습니다.\n 아이디와 비밀번호를 다시 입력해주세요");
    }

  };

    return (
    <Container>
    <Title to ="/"> VITA </Title>
    
    <Form onSubmit={handleSubmit}>
    {/*3.input 요소에 value와 onchange를 연결하여 양방향 바인딩을 만듭니다. */}
    
    <FormGroup>
      <Label htmlFor="email">아이디 (이메일 형식)</Label>
      <Input
      id="email"
      type = "email" //@ 특수문자 포함하게 하는 기능
      placeholder="아이디를 입력하세요"
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


      {errorMessage && ( 
      <ErrorMessage>
      {errorMessage.split("\n").map((line, index) => (
        <React.Fragment key = {index}>
          {line}
          <br />
      
        </React.Fragment>
      ))}
      </ErrorMessage>
      )}

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

    <Link to="#">아이디 찾기</Link>
    <Link to="#">비밀번호 찾기</Link>
    <Link to="/sigin">회원가입</Link>

    </LinkMenu>
  
    </Container>
  );


};