
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//화면 구성 UI 에만 집중하자.
//실제 상세 화면 구성 및 스타일 적용 구성
//(목록으로 돌아가기, 이미지, 음식 이름,설명, 목표/음식종류, 조리시간, 난이도, 좋아요, 영양 정보
// 요리법, 재료, 리뷰 기능 구현



const Wrapper = styled.div`
  padding: 2rem 10rem;
  max-width: 1200px;
  margin: 0 auto;
`;



//좋아요 - +1, -1

export default function FoodDetailInfo( { food }) {


  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(food.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <Wrapper>
    
    





    </Wrapper>

  );


};