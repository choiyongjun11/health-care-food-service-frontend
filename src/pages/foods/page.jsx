import styled from "styled-components";
import FoodCard from "../../components/Foodcard";
import PageLayout from "../../components/layout/Pagelayout";
import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
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
  gap: 1rem;
  justify-content: center;
  padding: 1rem 10rem;
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

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => (active ? "#333" : "#eee")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function FoodsPage() {
  const [foods, setFoods] = useState([]);
  const [pageInfo, setPageInfo] = useState({ page: 0, totalPages: 0 });
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedLike, setSelectedLike] = useState("전체");


  const fetchFoods = async (page = 0) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/foods?page=${page + 1}&size=10`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },

      });

      setFoods(response.data.data);
      setPageInfo(response.data.pageInfo);
      setCurrentPage(page);
    } catch (err) {
      console.error("데이터를 가져오지 못했습니다.", err);
      setError("데이터를 가져오지 못했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const Pagination = () => {
    const pages = Array.from({ length: pageInfo.totalPages }, (_, i) => i);
    return (
      <PaginationWrapper>
        {pages.map((page) => (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => fetchFoods(page)}
          >
            {page + 1}
          </PageButton>
        ))}
      </PaginationWrapper>
    );
  };

  const filteredFoods = selectedCategory === "전체"
  ? foods
  : foods.filter((food) => food.foodCategory === selectedCategory);


    const sortedFoods = [...filteredFoods].sort((a, b) => {
      if (selectedLike === "조회 순") {
        return b.viewCount - a.viewCount; // 조회수가 높은 순
      } else if (selectedLike === "좋아요 순") {
        return b.likeCount - a.likeCount; // 좋아요가 높은 순
      } else {
        return 0; 
      }
    });
    const searchFoods = sortedFoods.filter((food) => {
      const keyword = searchKeyword.toLowerCase();
      const nameMatch = food.foodName.toLowerCase().includes(keyword);
      const ingredientMatch = food.foodIngredients?.some((ing) =>
        ing.ingredientName.toLowerCase().includes(keyword)
      );
      return nameMatch || ingredientMatch;
    });


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
        
        <SearchInput placeholder="음식명 또는 재료로 검색" value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}/>

        <Button>검색</Button>
        <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option>전체</option>
          <option>국/탕/찌개</option>
          <option>밥</option>
          <option>면</option>
          <option>메인요리/반찬</option>
          <option>육류</option>
          <option>샐러드/디저트</option>
          <option>구황작물</option>
          <option>음료</option>
        </Select>

        <Select value={selectedLike} onChange={(e) => setSelectedLike(e.target.value)}>
          <option>전체</option>
          <option>조회 순</option>
          <option>좋아요 순</option>
        </Select>
      </FilterBar>

      <ContentWrapper>
      {searchFoods.map((food) => (   
        <StyledLink to={`/foods/${food.foodId}`} key={food.foodId}>
          <FoodCard food={food} />
        </StyledLink>
      ))}

      </ContentWrapper>

      <Pagination />
    </PageLayout>
  );

}
