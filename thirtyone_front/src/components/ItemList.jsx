import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ListContainer = styled.div`
  width: 345px;
  height: 120px;
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
  display: flex;
  margin-top: 8px;
`;

const SelectBtn = styled.button`
  display: flex;
  padding: 3px;
  width: 40px;
  border: none;
  background: #d94844;
  color: white;
  font-size: 12px;
  font-weight: 700;
  align-items: center;
  border-radius: 10px;
  margin-left: auto;
  justify-content: center;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

// 떨이 상품 담는 컴포넌트 -> ItemPage 페이지에 들어감
const ItemList = ({ onSelect }) => {
  // 여기 item부분을 나중에 axios로 데이터 가져오는걸로 수정하기!!

  const [items, setItems] = useState([]);

  // 카테고리별 떨이 상품 목록 조회 API 가져오는 부분
  useEffect(() => {
    axios
      .get() // API 주소
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data :", error);
      });
  }, []);

  // const item = {
  //   name: "소고기 400g",
  //   price: "15000",
  //   sale_price: "10000",
  //   store: "ABC 정육",
  //   amount: 1,
  // };

  return (
    <>
      {items.map((item) => (
        <ListContainer key={item.id}>
          <ItemImage src={item.photo} />
          <TextBox>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemPrice>
              <OriginalPrice>{item.price}원</OriginalPrice>
              <Arrow src="/assets/arrow.svg" />
              <SalePrice>{item.sale_price}원</SalePrice>
            </ItemPrice>
            <StoreName>
              {item.store.name}
              <SelectBtn onClick={() => onSelect(item)}>담기</SelectBtn>
            </StoreName>
          </TextBox>
        </ListContainer>
      ))}
    </>
  );
};

export default ItemList;
