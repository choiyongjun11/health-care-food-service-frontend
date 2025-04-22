import React, { useState } from "react";
import styled from "styled-components";
import PageLayout from "../../components/layout/Pagelayout";
import UserSettings from "../../components/Usersetting";
import UserActivity from "../../components/Useractivity";


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

  background-color: ${({ active }) => (active ? "#71B700" : "#eee")};
  color: ${({ active }) => (active ? "black" : "white")};
  border: none;
  border-radius: 4px;


  cursor: pointer;
  &:hover {
    background-color: ${({ active }) => (active ? "#5da600" : "#ddd")};
  }
`;


export default function MyPage() {
  const [activeTab, setActiveTab] = useState("settings");

  return (
    
      <PageLayout>
      <Title>마이페이지</Title>
        <Content>


          <TabButton active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}> 설정 </TabButton>
          
          <TabButton active={activeTab === "activity"}
            onClick={() => setActiveTab("activity")}> 활동 내역 </TabButton>

            
          {activeTab === "settings" && <UserSettings />}
          {activeTab === "activity" && <UserActivity />}





        </Content>

      </PageLayout>

  );
}