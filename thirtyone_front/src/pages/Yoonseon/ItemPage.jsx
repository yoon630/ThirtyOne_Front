// 카테고리 선택 후 떨이 상품 나오는 페이지
import React from "react";
import styled from "styled-components";
import PrevHeader from "../../components/PrevHeader";
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemList";
import "./ItemPage.css";
import { useParams } from "react-router-dom";

const TitleContainer = styled.div`
  display: flex;
  width: 304px;
  height: 90px;
  box-sizing: border-box;
  padding: 8px;
  justify-content: space-evenly;
  margin: 10px;
  align-items: center;
`;
const CategoryTitle = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin: 8px;
  padding: 8px;
  color: #d94844;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 1px solid #d94844;
  border-radius: 20px;
  padding: 8px;
`;

const categories = [
  { type: "빵", icon: "/assets/bread.svg", link: "bread" },
  { type: "고기", icon: "/assets/meat.svg", link: "meat" },
  { type: "채소", icon: "/assets/vege.svg", link: "vegetable" },
  { type: "간식", icon: "/assets/snack.svg", link: "snack" },
  { type: "반찬", icon: "/assets/sidedish.svg", link: "side-dish" },
  { type: "과일", icon: "/assets/fruit.svg", link: "fruit" },
];

const ItemPage = () => {
  const { category } = useParams();

  // 클릭한 카테고리에 대한 정보
  const selectedCategory = categories.find((cat) => cat.link === category);

  if (!selectedCategory) {
    return <div>error</div>;
  }

  return (
    <>
      <header>
        <PrevHeader />
      </header>
      <TitleContainer>
        <Icon src={selectedCategory.icon} alt={selectedCategory.icon}></Icon>
        <CategoryTitle>{selectedCategory.type} 떨이상품</CategoryTitle>
      </TitleContainer>
      <main>
        <ItemList />
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
};

export default ItemPage;
