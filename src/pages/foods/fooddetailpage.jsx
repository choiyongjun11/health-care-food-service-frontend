import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/foods/${id}`);
        setFood(response.data.data);
      } catch (err) {
        console.error("데이터 요청 실패:", err);
        setError("데이터를 가져오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  if (loading) return <PageLayout>불러오는 중...</PageLayout>;
  if (error) return <PageLayout>{error}</PageLayout>;

  return (
    <PageLayout>
      <FoodDetailInfo food={food} />
    </PageLayout>
  );

};