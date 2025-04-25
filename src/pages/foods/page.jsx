import styled from "styled-components";
import FoodCard from "../../components/Foodcard";
import PageLayout from "../../components/layout/Pagelayout";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  width: 80px;
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
  padding: 2rem 10rem;
  max-width: 1200px;
  margin: 0 auto;

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export default function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:8080/foods?page=1&size=10");
        setFoods(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("데이터를 가져오지 못했습니다.");
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <PageLayout>
        <div style={{ textAlign: "center", padding: "2rem" }}>불러오는 중...</div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div style={{ textAlign: "center", color: "red", padding: "2rem" }}>{error}</div>
      </PageLayout>
    );
  }

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
          <StyledLink key={food.id} to={`/foods/${food.id}`}>
            <FoodCard food={food} />
          </StyledLink>
        ))}
      </ContentWrapper>
    </PageLayout>
  );
}
