// 카테고리 선택 후 떨이 상품 나오는 페이지
import React, { useState } from "react";
import styled from "styled-components";
import PrevHeader from "../../components/PrevHeader";
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemList";
import ModalPopup from "../../components/ModalPopup";
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

const Item = styled.h2`
  color: #d94844;
`;
const Text = styled.p`
  color: #d94844;
  font-weight: bold;
`;

const Price = styled.p`
  color: #656565;
  font-weight: bold;
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
  // 카테고리 선택했을 때 그 카테고리 넘기는 역할
  const { category } = useParams();

  //ModalPopup 컴포넌트에 컨트롤하는 useState
  const [showModal, setShowModal] = useState(false);

  // 모달창에 각 가게 상품 정보들을 ItemList컴포넌트에 주고받는 상태관리
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 정보를 저장할 상태

  // 상태 관리 함수들
  // 모달 팝업 창 토글하는 함수
  const toggleModal = (item) => {
    setSelectedItem(item);
    setShowModal(!showModal);
  };

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
        <ItemList onSelect={toggleModal} />
        {showModal && selectedItem && (
          <ModalPopup show={showModal} onClose={() => setShowModal(false)}>
            <Item>{selectedItem.name}</Item>
            <Text>{selectedItem.store}</Text>
            <Price>정가 : {selectedItem.price}</Price>
            <Text>떨이 할인가 : {selectedItem.salePrice}</Text>
            <Text>수량 : {selectedItem.amount}</Text>
          </ModalPopup>
        )}
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
};

export default ItemPage;
