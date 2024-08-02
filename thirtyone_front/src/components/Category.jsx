import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px; /* 그리드 아이템 간의 간격 */
  padding: 16px;
  justify-items: center;
  align-items: center;
  min-height: 330px; /* 최소 높이 설정 */
  box-sizing: border-box;
  overflow: hidden;
`;

const GridItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #d94844; /* 텍스트 색상 */
  height: 100%;
`;

const Icon = styled.img`
  width: 65px; /* 아이콘 크기 */
  height: 55px; /* 아이콘 크기 */
  margin-bottom: 8px; /* 아이콘과 텍스트 간의 간격 */
  border: 1px solid #d94844;
  border-radius: 20px;
  padding: 8px;
`;

const Label = styled.span`
  font-size: 15px; /* 텍스트 크기 */
  font-weight: bold;
  color: #d94844; /* 텍스트 색상 */
`;

const categories = [
  { name: "빵", icon: "assets/bread.svg", link: "/bread" },
  { name: "고기", icon: "assets/meat.svg", link: "/meat" },
  { name: "채소", icon: "assets/vege.svg", link: "/vegetable" },
  { name: "간식", icon: "assets/snack.svg", link: "/snack" },
  { name: "반찬", icon: "assets/sidedish.svg", link: "/side-dish" },
  { name: "과일", icon: "assets/fruit.svg", link: "/fruit" },
];

const Category = () => {
  return (
    <GridContainer>
      {categories.map((category) => (
        <GridItem to={category.link} key={category.name}>
          <Icon src={category.icon} alt={category.name} />
          <Label>{category.name}류</Label>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default Category;
