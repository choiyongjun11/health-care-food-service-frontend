import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PageLayout from "../../components/layout/Pagelayout";
import UserSettings from "../../components/Usersetting";
import UserActivity from "../../components/Useractivity";
import { useParams } from "react-router-dom";

//라우팅 및 axios 통신만 처리합니다.
// 마이페이지 탭 형식으로 구성하자!

const Title = styled.div`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  background-color: white;
  margin: 0 auto;
  padding: 15px;

`;

const Content = styled.div`
margin: auto;
background-color: white;
`;

const TabButton = styled.button`
  padding: 1rem;
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
  width: 50%;

  background-color: ${({ $active }) => ($active ? "#71B700" : "#eee")};
  color: ${({ $active }) => ($active ? "black" : "white")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ $active }) => ($active ? "#5da600" : "#ddd")};
  }
`;

// axios 통신 시도
export default function MyPage() {


  const [activeTab, setActiveTab] = useState("settings");
  const [userData, setUserData] = useState(null);
  const id = localStorage.getItem("userId");

  

  useEffect(() => {
    if (!id) return; // id가 없으면 API 요청 막기
  
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/members/${id}`);
        setUserData(response.data.data);
      } catch (error) {
        console.error("유저 정보 로딩 실패", error);
      }
    };
  
    fetchUser();
  }, [id]);

  const handleUpdateUser = async (updatedUser) => {
    try {
      const payload = {
        name: updatedUser.name,
        birthday: updatedUser.birthday,
        phone: updatedUser.phone,
      };
  
      console.log("업데이트할 데이터:", payload);
  
      const response = await axios.patch(`http://localhost:8080/members/${id}`, payload);
  
      alert("정보가 저장되었습니다.");
      setUserData((prev) => ({
        ...prev,
        ...payload,
      }));
    } catch (error) {
      console.error("업데이트 실패:", error);
      alert("저장 실패");
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:8080/members/${id}`);
      alert("계정 삭제 완료");
      localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      alert("계정 삭제 실패");
    }

  };


  return (
    <PageLayout>
    <Title>마이페이지</Title>
    <Content>
  <TabButton
    $active={activeTab === "settings"} onClick={() => setActiveTab("settings")}>
    설정
  </TabButton>
  <TabButton
    $active={activeTab === "activity"} onClick={() => setActiveTab("activity")}>
    활동 내역
  </TabButton>

  {activeTab === "settings" && userData && (
    <UserSettings
      userData={userData}
      onUpdateUser={handleUpdateUser}
      onDeleteUser={handleDeleteUser}
    />
  )}

  {activeTab === "activity" && <UserActivity />}
</Content>
  </PageLayout>


  );
}