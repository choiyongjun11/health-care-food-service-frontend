import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FoodCard from "./Foodcard";

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

export default function UserActivity() {

  const [tab, setTab] = useState("likes");
  const [likedFoods, setLikedFoods] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [healthTargets, setHealthTargets] = useState([]);

  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/members/${id}/actives`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = response.data.data;
        console.log(data);

        if (data) {
          setLikedFoods(data.likedFoods.map(food => ({
            id: food.foodId,
            likeCount: food.likeCount,
            liked: food.liked,
            foodName: food.foodName,
            foodImageUrl: food.foodImageUrl,
            foodCategory: food.foodCategory,
            foodIngredients: food.foodIngredients
          })));

          setReviews(data.writtenReviews.map(review => ({
            id: review.reviewId,
            content: review.content,
            date: review.reviewCreateDate,
          })));

          setHealthTargets(data.healthTargets.map(target => ({
            id: target.targetId,
            goalTypeCategory: target.goalTypeCategory,
            goalTypeName: target.goalTypeName,
            ageGroupName: target.ageGroupName,
            targetStatus: target.targetStatus,
          })));
        }
      } catch (error) {
        console.error("활동 이력 로딩 실패:", error);
      }
    };

    fetchUser();
  }, [id]);

  const renderCards = () => {
    if (tab === "likes") {
      return likedFoods.length > 0 ? likedFoods.map((food) => (
        <FoodCard key={food.id} food={food} /> // 좋아요한 음식은 FoodCard로 출력
      )) : <p>좋아요한 음식이 없습니다.</p>;

    } else if (tab === "reviews") {
      return reviews.length > 0 ? reviews.map((item) => (
        <div key={item.id}>
          <h3>리뷰 ID: {item.id}</h3>
          <p>작성일: {item.date}</p>
          <p>{item.content}</p>
        </div>
      )) : <p>작성한 리뷰가 없습니다.</p>;

    } else if (tab === "targets") {
      return healthTargets.length > 0 ? healthTargets.map((item) => (
        <div key={item.id}>
          <h3>{item.goalTypeCategory} - {item.goalTypeName}</h3>
          <p>연령대: {item.ageGroupName}</p>
          <p>상태: {item.targetStatus}</p>
        </div>
      )) : <p>설정한 목표가 없습니다.</p>;
    }
  };

  return (
    <Container>
      <Card>
        <h2>활동 내역</h2>
        <Description>좋아요한 음식, 작성한 리뷰, 설정한 목표를 확인할 수 있습니다.</Description>
        <Tabs>
          <TabButton active={tab === "likes"} onClick={() => setTab("likes")}>
            좋아요한 음식
          </TabButton>
          <TabButton active={tab === "reviews"} onClick={() => setTab("reviews")}>
            작성한 리뷰
          </TabButton>
          <TabButton active={tab === "targets"} onClick={() => setTab("targets")}>
            설정한 목표
          </TabButton>
        </Tabs>

        <Grid>{renderCards()}</Grid>
      </Card>
    </Container>
  );

}
