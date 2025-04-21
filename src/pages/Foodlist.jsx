import React, { useState } from "react";
import styled from "styled-components";
import FoodCard from "../components/Foodcard";
import PageLayout from "../components/layout/Pagelayout";

//전체 음식 데이터를 spring 에서 받아와 카드 목록으로 보여준다.
//정렬, 검색, 필터링, 좋아요 같은 데이터 중심 로직 처리
//각 데이터를 FoodCard에 전달하여 렌더링을 위임

//전체 음식 목록 조회
// 정렬, 검색, 필터링 UI 포함
// 음식에 대한 정보 조회만 가능, 조회수/좋아요 수 조작 불가
// 각 아이템은 foodCard 로 렌더링

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 auto;

  padding: 0 10rem;
  padding-top: 2rem;
  
`;

const FilterBar = styled.div`
  max-width: 1920px;
  padding: 0 10rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;

`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 20px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
`;

const Select = styled.select`
  padding: 1rem;

    font-size: 1rem;
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  max-width: 1920px;
  padding: 0 10rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  border-radius: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

//전체조회를 위해서 상태를 변경해야 합니다. -> useState 사용합니다.
//spring localhost:8080/foods 에서 feetch 작업
export default function FoodList() {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "그린 샐러드",
      category: "샐러드/디저트",
      ingredients: "양상추, 시금치, 오이, 토마토, 올리브 오일",
      image: "/foods/green-salad.jpg",
      views: 920,
      likes: 220
   
    },
    {
      id: 2,
      name: "오트밀",
      category: "샐러드/디저트",
      ingredients: "귀리, 우유, 바나나, 블루베리, 견과류",
      image: "/foods/oatmeal.jpg",
      views: 750,
      likes: 180
 
    },
    {
      id: 3,
      name: "소고기 스테이크",
      category: "육류",
      ingredients: "소고기, 브로콜리, 방울토마토, 아스파라거스",
      image: "/foods/steak.jpg",
      views: 860,
      likes: 205

    },
    {
      id: 4,
      name: "된장찌개",
      category: "국/탕/찌개",
      ingredients: "된장, 두부, 대파, 마늘, 멸치육수",
      image: "/foods/salmon-steak.jpg",
      views: 980,
      likes: 265
  
    },
    {
      id: 5,
      name: "아보카도 토스트",
      category: "간식",
      ingredients: "통밀빵, 아보카도, 토마토, 올리브 오일",
      image: "/foods/avocado-toast.jpg",
      views: 800,
      likes: 190
 
    },
    {
      id: 6,
      name: "채소 볶음밥",
      category: "한식",
      ingredients: "현미, 브로콜리, 당근, 피망, 계란",
      image: "/foods/veggie-fried-rice.jpg",
      views: 1050,
      likes: 275

    },
    {
      id: 7,
      name: "콩불 샐러드",
      category: "샐러드/디저트",
      ingredients: "두부, 병아리콩, 적양배추, 올리브 오일",
      image: "/foods/chickpea-salad.jpg",
      views: 680,
      likes: 155
  
    },
    {
      id: 8,
      name: "그릭 요거트 볼",
      category: "샐러드/디저트",
      ingredients: "그릭 요거트, 블루베리, 그래놀라, 꿀",
      image: "/foods/greek-yogurt.jpg",
      views: 890,
      likes: 230,

    }
  ]);


  return (

    <PageLayout>
      <Title>음식 목록</Title>
      <FilterBar>
        <SearchInput placeholder="음식명 또는 재료로 검색" />
        <Button>검색</Button>
        <Select>
          <option>전체</option>
          <option>한식</option>
          <option>육류</option>
          <option>국/탕/찌개</option>
          <option>간식</option>
          <option>샐러드/디저트</option>
        </Select>

        <Select>
          <option>조회 순</option>
          <option>좋아요 순</option>
         
        </Select>
      </FilterBar>

      <ContentWrapper>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </ContentWrapper>
      
      </PageLayout>


    
  );
}
