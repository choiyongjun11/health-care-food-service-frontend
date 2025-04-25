import React from "react";
import styled from "styled-components";


//음식 1개의 카드 UI를 담당한다. 클릭 시 상세 페이지로 이동 가능하도록 구현
//음식 1개를 보여주는 카드 단위 UI 컴포넌트 담당
//카드 클릭 시 상세 페이지로 이동 하기

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 320px;
  border: 3px solid black;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
  
`;


const Info = styled.div`
  padding: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin: 0.2rem;

  border-radius: 10px;
  border-bottom: 2px solid;
  background-color: rgb(186, 186, 186);

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
  color: #878686;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; // 3줄까지만 표시
  -webkit-box-orient: vertical;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;


export default function FoodCard({ food }) {

  return (
    <CardWrapper>
      <Header>No.{food.foodId} <span>{food.foodCategory}</span> </Header>
      <Info>
        <Image src={food.foodImageUrl} alt={food.foodName} />
        <Title>{food.foodName}</Title>
        <Desc>{Array.isArray(food.foodIngredients)? food.ingredients.join(", "): food.foodIngredients} </Desc>
        <Stat>
          조회수: {food.viewCount}
          <span>❤️ {food.likeCount}</span>
        </Stat>
      </Info>
    </CardWrapper>
  );

}
