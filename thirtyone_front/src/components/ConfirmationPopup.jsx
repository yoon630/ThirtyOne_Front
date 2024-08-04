import React from "react";
import styled from "styled-components";

const ConfirmationPopupContainer = styled.div`
  &.confirmation-popup {
    position: absolute;
    top: 650px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(217, 72, 68, 0.77);
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    font-size: 16px;
    z-index: 100; /* Ensure it's above other content */
    width:160px
  }
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0;
`;
const CheckImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
// "예약완료되었습니다" 뜨는 팝업 컴포넌트

const ConfirmationPopup = ({ message }) => {
  return (
    <ConfirmationPopupContainer className="confirmation-popup">
      <TotalContainer>
        <CheckImage src="/assets/check.svg" />
        {message}
      </TotalContainer>
    </ConfirmationPopupContainer>
  );
};

export default ConfirmationPopup;
