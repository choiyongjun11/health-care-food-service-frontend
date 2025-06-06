
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { View } from "lucide-react";

//화면 구성 UI 에만 집중하자.
//실제 상세 화면 구성 및 스타일 적용 구성
//(목록으로 돌아가기, 이미지, 음식 이름,설명, 목표/음식종류, 조리시간, 난이도, 좋아요, 영양 정보
// 요리법, 재료, 리뷰 기능 구현

/*
UI 구현)
1. 전체 틀
2. 목록 돌아가기 버튼
3. 음식 사진, 음식 이름, 음식 설명, 음식이 주는 영향, 음식 종류
4. 음식 설명
5. 조리시간, 난이도
6. 영양 정보, 좋아요 버튼 //여기까지
7. 요리법, 재료, 리뷰 탭
8. 각 탭에 대한 설명 글
*/



const Wrapper = styled.div`
  padding: 2rem 10rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Category = styled.span`
  background: #eefbe9;
  color: #71B700;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: bold;
`;

const Description = styled.p`
  margin: 1rem 0;
  line-height: 1.6;
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
`;

const LikeButton = styled.button`
  background-color: ${({ liked }) => (liked ? "#ff4d4d" : "#71B700")};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
`;

const TabMenu = styled.div`
  display: flex;
  margin-top: 2rem;
  border-bottom: 2px solid #ccc;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 1rem;
  background-color: ${({ active }) => (active ? "#d5ebd4" : "#f3f3f3")};
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-right: 1px solid #ccc;

  &:last-child {
    border-right: none;
  }
`;

const TabContent = styled.div`
  margin-top: 2rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
`;

export default function FoodDetailInfo({ food, onLike }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState("recipe");

  const ingredientNames = Array.isArray(food.foodIngredients)
  ? food.foodIngredients.map(ingredient => ingredient.ingredientName).join(", ") : "";

  return (
    <Wrapper>
      <BackButton onClick={() => navigate(-1)}> 
      ▶ 목록으로 돌아가기
      </BackButton>
      <TopSection>
      <Image src={`${process.env.PUBLIC_URL}/assets/${food.foodImageUrl}`} alt={food.foodName} />
        <Info>
          <Category>{food.foodCategory}</Category>
          <Title>{food.foodName}</Title>
          <Description>식재료: {ingredientNames} </Description>
          <Description>설명: {food.foodDescription}</Description>
          <Stats>
            <div>조회수: {food.viewCount}</div>
            <div>좋아요: ❤️ {food.likeCount} </div>
          </Stats>
          <LikeButton liked={food.liked} onClick={onLike}>
          {food.liked ? "좋아요 취소" : "좋아요"}
          </LikeButton>
        </Info>
      </TopSection>


            <TabMenu>
        <TabButton active={tab === "recipe"} onClick={() => setTab("recipe")}>요리법</TabButton>
        <TabButton active={tab === "ingredients"} onClick={() => setTab("ingredients")}>재료</TabButton>
        <TabButton active={tab === "reviews"} onClick={() => setTab("reviews")}>
          리뷰({food.foodReviews.length})
        </TabButton>
      </TabMenu>


      <TabContent>
        {tab === "recipe" && (
          <>
            <h3>요리법 - 조리방법</h3>
            {food.recipe?.process?.map(step => (
              <p key={step.step}>
                <strong>{step.step}. </strong> {step.instruction} ({step.cooktime}분)
              </p>
            ))}
            <p>총 조리 시간: {food.recipe?.totalCookingTime}</p>
            <p>난이도: {food.recipe?.difficulty}</p>
          </>
        )}

        {tab === "ingredients" && (
          <>
            <h3>재료</h3>
            <ul>
              {food.foodIngredients?.map(ing => (
                <li key={ing.ingredientId}>
                  {ing.ingredientName} / {ing.ingredientType} / {ing.ingredientOrigin} / {ing.storageMethod}
                </li>
              ))}
            </ul>
          </>
        )}

        {tab === "reviews" && (
          <>
            <h3>리뷰</h3>
            {food.foodReviews?.map(review => (
              <p key={review.reviewId}>
                <strong>{review.memberName}</strong>: {review.content} ({review.reviewCreateDate})
              </p>
            ))}
          </>
        )}
      </TabContent>

    </Wrapper>
  );
};
