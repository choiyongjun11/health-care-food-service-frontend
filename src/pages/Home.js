import React, { useState } from "react";
import Button from "../components/Button";
import FoodList from "../components/FoodList";
import Header  from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";


const PageWrapper = styled.div`
  padding: 25px;
`;

function Home() {

  const [count, setCount] = useState(0);

  return (

    <>
    <Header/>
    <PageWrapper>
    <div>
      <h1>홈페이지입니다.</h1>
      <p>버튼을 클릭한 횟수: {count}</p>
      <FoodList />
      <Button onClick={() => setCount(count+1)}>클릭</Button>
    </div>
    </PageWrapper>

    <Footer/>
    </>
  );

};

export default Home;
