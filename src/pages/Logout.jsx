import React, {useEffect}  from "react";
import { useNavigate } from "react-router-dom";

//logout 을 누를 시 root 화면으로 전환이 되어한다. 따라서 navigate, effect 작업 필요.


export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear(); // 로그인 상태 제거
    navigate("/", { replace: true }); // 메인 페이지로 이동
  }, [navigate]);



  return null; // 명시적으로 아무것도 렌더링하지 않음

};