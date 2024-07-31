// 카테고리 선택 후 떨이 상품 나오는 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrevHeader from "../../components/PrevHeader";
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemList";
import ModalPopup from "../../components/ModalPopup";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import "./ItemPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

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
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #d94844;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #a73230;
  }
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

  const [quantity, setQuantity] = useState(1); // 수량 관리하는 useState

  // 떨이PICK 후에 예약 완료/실패 상태관리하는 useState
  const [isConfirmed, setConfirmed] = useState(false); // 떨이픽 누르면 "예약되었습니다" 관리하는 거
  const [isFailed, setFailed] = useState(false);

  // -------------------API 연결 부분 -------------------------//

  // 모달 팝업 창 토글하는 함수
  const toggleModal = (item) => {
    if (item) {
      axios
        .get(`/api/itemPage/${item.id}`) //요기에 API 주소넣기
        .then((response) => {
          const itemData = response.data; // 수량 받아올 변수
          setSelectedItem(response.data); // 선택된 아이템에 맞는 데이터 가져오기
          setShowModal(true); // Modal창 보이는 부분 true로 상태 변경
          setQuantity(itemData.amount); // 수량은 API의 amount값으로 설정
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      //선택된 아이템 없으면
      setShowModal(false); //모달 안보이게 함
      setSelectedItem(null); // 선택된 아이템 없음
    }
  };

  //---------- 상태 관리 함수들------------------//

  // 수량 조절하는 핸들러 함수
  // 수량 증가
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  // 수량 감소
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // 떨이픽 관리하는 함수 2개
  // 떨이 예약 성공
  const handlePickSuccess = () => {
    setShowModal(false); // 주문 팝업 안보이게하고
    setConfirmed(true); // 떨이픽 true로 바꾸기 (예약완료)
    console.log("예약완료");
    setTimeout(() => {
      setConfirmed(false);
    }, 3000); // "예약완료" 3초뒤에 사라지게 함
  };

  // 떨이 예약 실패
  const handlePickFailure = () => {
    setShowModal(false); // 주문 팝업 안보이게하고
    setFailed(true); // 떨이픽 실패 true로 바꾸기 (예약실패)
    setTimeout(() => {
      setFailed(false);
    }, 3000);
  };

  // 클릭한 카테고리에 대한 정보 찾는 변수
  const selectedCategory = categories.find((cat) => cat.link === category);

  if (!selectedCategory) {
    return <div>Category Error</div>;
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
          <ModalPopup
            show={showModal}
            onClose={() => setShowModal(false)}
            onPickSuccess={handlePickSuccess}
            onPickFailure={handlePickFailure}
            itemData={selectedItem}
          >
            <Item>{selectedItem.name}</Item>
            <Text>{selectedItem.store.name}</Text>
            <Price>정가 : {selectedItem.price}원</Price>
            <Text>떨이 할인가 : {selectedItem.sale_price}원</Text>
            <QuantityContainer>
              <Text>수량 : </Text>
              <Button onClick={decrementQuantity}>-</Button>
              <Text>{quantity}</Text>
              <Button onClick={incrementQuantity}>+</Button>
            </QuantityContainer>
          </ModalPopup>
        )}
        {isConfirmed && <ConfirmationPopup message={"예약 완료"} />}
        {isFailed && <ConfirmationPopup message={"예약 실패"} />}
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
};

export default ItemPage;
