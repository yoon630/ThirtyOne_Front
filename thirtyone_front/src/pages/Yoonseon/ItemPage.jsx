// 카테고리 선택 후 떨이 상품 나오는 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PrevHeader from "../../components/PrevHeader";
import Navbar from "../../components/Navbar";
import ItemList from "../../components/ItemList";
import ModalPopup from "../../components/ModalPopup";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import "./ItemPage.css";
import { useParams, useLocation } from "react-router-dom";
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
  border: 3px solid #d94844;
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

const ItemPage = () => {
  // 카테고리 선택했을 때 그 카테고리 넘기는 역할
  const { category } = useParams();
  console.log(category);
  const location = useLocation(); // Category 컴포넌트에서 URL로 아이콘이랑 카테고리 받아오는 역할

  // URL 쿼리 파라미터에서 카테고리 타입과 아이콘을 추출
  const queryParams = new URLSearchParams(location.search);
  const categoryType = queryParams.get("type");
  const categoryIcon = queryParams.get("icon");

  // ItemList에 넘기는 props
  const [items, setItems] = useState([]);

  //ModalPopup 컴포넌트에 컨트롤하는 useState
  const [showModal, setShowModal] = useState(false);

  // 모달창에 각 가게 상품 정보들을 ItemList컴포넌트에 주고받는 상태관리
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 정보를 저장할 상태

  const [quantity, setQuantity] = useState(1); // 수량 관리하는 useState

  // 떨이PICK 후에 예약 완료/실패 상태관리하는 useState
  const [isConfirmed, setConfirmed] = useState(false); // 떨이픽 누르면 "예약되었습니다" 관리하는 거
  const [isFailed, setFailed] = useState(false);

  // -------------------API 연결 부분 -------------------------//
  // 카테고리에 해당하는 아이템 리스트를 가져오는 부분
  useEffect(() => {
    axios
      .get(`http://13.125.100.193/buyer/category/${category}/list`)
      .then((response) => {
        // 카테고리와 product_type이 일치하는 데이터 필터링
        console.log("연결 데이터 확인:", response.data);

        const filteredItems = response.data.filter(
          (item) =>
            item.product_type.trim().toLowerCase() ===
            category.trim().toLowerCase()
        );
        console.log("Filtered Items:", filteredItems); // 필터링된 데이터 로그
        setItems(filteredItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.response || error.message);
      });
  }, [category]);

  // 모달 팝업 창 토글하는 함수
  const toggleModal = (item) => {
    if (item) {
      axios
        .get(`http://13.125.100.193/buyer/product/${item.id}`)
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

  return (
    <>
      <header>
        <PrevHeader />
      </header>
      <TitleContainer>
        <Icon src={categoryIcon} alt={categoryType}></Icon>
        <CategoryTitle>{categoryType} 떨이상품</CategoryTitle>
      </TitleContainer>
      <main>
        <ItemList onSelect={toggleModal} items={items} category={category} />
        {showModal && selectedItem && (
          <ModalPopup
            show={showModal}
            onClose={() => setShowModal(false)}
            onPickSuccess={handlePickSuccess}
            onPickFailure={handlePickFailure}
            itemData={selectedItem}
            quantity={quantity}
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
