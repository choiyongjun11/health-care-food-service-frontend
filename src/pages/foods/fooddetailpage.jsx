import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import PageLayout from "../../components/layout/Pagelayout";
import FoodDetailInfo from "../../components/Fooddetailinfo";

//데이터 흐름과 라우팅에만 집중하자.
//음식 상세 페이지 (라우팅+ 데이터 fetch + 로딩처리) 진행

export default function FoodDetailPage() {

  const { id } = useParams(); // URL로부터 id 추출
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const calledOnce = useRef(false); //한번만 호출하도록 막기(개발중에)
 
    const fetchFood = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/foods/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
             // JWT 저장했으면 꺼내오기
          }
        });
        setFood(response.data.data);
      } catch (err) {
        console.error("데이터 요청 실패:", err);
        setError("데이터를 가져오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };


    //좋아요 버튼 클릭 시 처리
    const handleLike = async () => {
      try {
        // JWT 토큰이 필요하면 여기에 Authorization 헤더 추가해야 함
        await axios.post(`http://localhost:8080/foods/${id}/like`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
             // JWT 저장했으면 꺼내오기
          }
        });

        setFood(prev => ({
          ...prev,
          liked: !prev.liked,
          likeCount: prev.liked ? prev.likeCount - 1 : prev.likeCount + 1,
        }));

      } catch (err) {
        console.error("좋아요 요청 실패:", err);
        alert("로그인 후 이용 가능합니다.");
      }

    };

    useEffect(() => {
      if(calledOnce.current) return;
      calledOnce.current = true;
      fetchFood();
    },[id]);

  if (loading) return <PageLayout>불러오는 중...</PageLayout>;
  if (error) return <PageLayout>{error}</PageLayout>;

  return (
    <PageLayout>
      <FoodDetailInfo food={food} onLike={handleLike} />
    </PageLayout>
  );

};