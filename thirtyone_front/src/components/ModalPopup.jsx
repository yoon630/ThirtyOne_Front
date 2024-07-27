// 떨이 상품 주문하는 팝업창 컴포넌트

import React from "react";

import styled from "styled-components";

const Modaloverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  width: 500px;
  max-width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Closebutton = styled.button`
  position: absolute;
  top: 280px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
`;

const ClosebtnImage = styled.img`
  width: 25px;
  height: 25px;
`;

const PickBtn = styled.button`
  width: 320px;
  height: 50px;
  padding: 3px;
  border-radius: 10px;
  border: none;
  background-color: #d94844;
  margin-left: 8px;
  color: white;
  font-weight: 800;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalPopup = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <Modaloverlay>
      <Modal>
        <Closebutton onClick={onClose}>
          <ClosebtnImage src="/assets/close.svg" alt="close btn" />
        </Closebutton>
        <div className="modal-content">{children}</div>
        <PickBtn>떨이 PICK</PickBtn>
      </Modal>
    </Modaloverlay>
  );
};

export default ModalPopup;
