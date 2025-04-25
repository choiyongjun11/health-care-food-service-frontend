import React, { useState } from "react";
import styled from "styled-components";


//ui 만 구현하자.

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: ${({ active }) => (active ? "#71B700" : "#eee")};
  color: ${({ active }) => (active ? "black" : "gray")};
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${({ active }) => (active ? "#5da600" : "#ddd")};
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
`;

const FoodCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const FoodInfo = styled.div`
  padding: 1rem;
`;

const FoodTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const FoodSub = styled.p`
  margin: 4px 0;
  font-size: 0.9rem;
  color: #666;
`;

const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => (props.liked ? 'red' : '#ccc')};
  cursor: pointer;
`;

const FoodWrapper = styled.div`
  position: relative;
`;

export default function UserActivity() {
  
  const [tab, setTab] = useState("likes");

  const [likedFoods, setLikedFoods] = useState([
    {
      id: 1,
      name: "김밥",
      date: "2023-04-01",
      image: "/foods/kimbap.jpg",
      liked: true, //좋아요 표시
    },
    {
      id: 2,
      name: "소고기",
      date: "2023-04-02",
      image: "/foods/soguggi.jpg",
      liked: true,
    },
  ]);

  const reviews = [
    {
      id: 1,
      name: "김치찌개",
      content: "김치가 잘 익어서 국물이 끝내줘요!",
      date: "2023-04-16",
      image: "/foods/kimchistew.jpg",
    },

    {
      id: 2,
      name: "불고기",
      content: "양념이 잘 배어있고 고기가 부드러워요.",
      date: "2023-04-11",
      image: "/foods/bulgogi.jpg",
    },

  ];

  //좋아요 표시는 토글 방식으로 합니다. (좋아요 등록 & 취소) 기능
  const toggleLike = (id) => {
    setLikedFoods((prev) =>
      prev.map((food) =>
        food.id === id ? { ...food, liked: !food.liked } : food
      )
    );
  };

  //좋아요한 음식 & 작성한 리뷰 내역 (if - else 로 작성)
  // 좋아요, 리뷰, 별점 정보를 foods 에서 가져와야 합니다.
  const renderCards = () => {
    if (tab === "likes") {
      return likedFoods.map((item) => (
        <FoodCard key={item.id}>
          <FoodWrapper>
            <FoodImage src={item.image} alt={item.name} />
            <HeartButton liked={item.liked} onClick={() => toggleLike(item.id)}>
              {item.liked ? "❤️" : "🤍"}
            </HeartButton>

          </FoodWrapper>
          
          <FoodInfo>
            <FoodTitle>{item.name}</FoodTitle>
            <FoodSub>{item.date} 좋아요</FoodSub>
          </FoodInfo>
          
        </FoodCard>
      ));
    } else {
      return reviews.map((item) => (
        <FoodCard key={item.id}>
          <FoodImage src={item.image} alt={item.name} />
          <FoodInfo>
            <FoodTitle>{item.name}</FoodTitle>
            <FoodSub>{item.date} 작성함</FoodSub>
            <FoodSub>{item.content}</FoodSub>
          </FoodInfo>
        </FoodCard>
      ));
    }
  };

  return (
    <Container>
      <Card>
        <h2>활동 내역</h2>
        <Description>좋아요한 음식과 작성한 리뷰를 확인할 수 있습니다.</Description>
        <Tabs>
          <TabButton active={tab === "likes"} onClick={() => setTab("likes")}>좋아요한 음식</TabButton>
          <TabButton active={tab === "reviews"} onClick={() => setTab("reviews")}>작성한 리뷰</TabButton>
        </Tabs>

        <Grid>{renderCards()}</Grid>
      </Card>
    </Container>
  );
}
