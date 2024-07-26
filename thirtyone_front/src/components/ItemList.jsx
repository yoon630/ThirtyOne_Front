import styled from "styled-components";
import React from "react";
import Store from "./Store";

const ListContainer = styled.div`
  width: 345px;
  height: 100px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  box-shadow: 3px 3px 3px #e0e0e0;
  margin: 10px;
`;
const ItemImage = styled.img`
  width: 90px;
  height: 70px;
  margin: 8px;
`;
const TextBox = styled.div`
  width: 200px;
  height: 95px;
  padding: 8px;
  display: block;
  box-sizing: border-box;
  align-items: center;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #d94844;
  padding: 5px;
  margin-left: 8px;
`;
const ItemPrice = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  padding: 3px;
  box-sizing: border-box;

  align-items: center;
`;

//API에서 price에 해당하는 부분 (세일 안한 정가)
const OriginalPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #b3b3b3;
  padding: 3px;
  margin: 5px;
`;
// API에서 sale_price에 해당하는 부분 (세일한 가격)
const SalePrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #d94844;
  padding: 3px;
  margin: 5px;
`;

const Arrow = styled.img`
  width: 15px;
  height: 15px;
  padding: 0px;
`;

const StoreName = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #d94844;
  padding: 3px;
  box-sizing: border-box;
  align-items: center;
  margin-left: 8px;
`;

// 떨이 상품 담는 컴포넌트 -> ItemPage 페이지에 들어감
const ItemList = () => {
  return (
    <ListContainer>
      <ItemImage src="" />
      <TextBox>
        <ItemTitle>소고기 400g</ItemTitle>
        <ItemPrice>
          <OriginalPrice>15000원</OriginalPrice>
          <Arrow src="assets/arrow.svg" />
          <SalePrice>10000원</SalePrice>
        </ItemPrice>
        <StoreName>ABC 정육</StoreName>
      </TextBox>
    </ListContainer>
  );
};

export default ItemList;
