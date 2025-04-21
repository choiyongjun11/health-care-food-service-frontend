import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

//음식 1개의 카드 UI를 담당한다. 클릭 시 상세 페이지로 이동 가능하도록 구현
//음식 1개를 보여주는 카드 단위 UI 컴포넌트
//카드 클릭 시 상세 페이지로 이동 하기

const CardWrapper = styled.div`
    position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;

`;


const Info = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin: 0.5rem;

`;

const Image = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  background: #f3f3f3;
`;

const Title = styled.h3`
  font-size: 1rem;

`;


const Desc = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;


export default function FoodCard({ food }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/foods/${food.id}`);


  };

  return (
    <CardWrapper onClick={handleClick}>
      <Header>No.{food.id} <span>{food.category}</span> </Header>
      <Info>
      <Image src={food.image || "/food.jpg"} alt={food.name} />
     
        <Title>{food.name}</Title>
        <Desc>재료: {food.ingredients}</Desc>
        <Stat>
          조회수: {food.views}
          <span>❤️: {food.likes}</span>
        </Stat>
      </Info>
    </CardWrapper>
  );

}
