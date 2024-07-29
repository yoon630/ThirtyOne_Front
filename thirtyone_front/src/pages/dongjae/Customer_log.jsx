import Layout from "../../pages/dongjae/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import Log from "../../components/dongjae/Log";
import Navbar from "../../components/Navbar";

const Header = styled.div`
  position: fixed; /* 고정된 위치 */
  width: 376px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #D94844;
  background-color: rgba(255, 255, 255, 1); /* 배경을 불투명하게 설정 */
  z-index: 1000; /* 다른 요소들보다 위에 표시 */
`;

const LogWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 60px); /* 헤더 높이를 제외한 전체 높이 */

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const LogItem = styled.div`
  margin: 10px 0; /* 로그 아이템 간의 간격을 설정 */
`;

const CustomerLog = () => {
  return (
    <>
      <Header>회원 구매 내역</Header>
      <LogWrapper>
        <LogItem><Log /></LogItem>
        <LogItem><Log /></LogItem>
        <LogItem><Log /></LogItem>
        <LogItem><Log /></LogItem>
        {/* 로그 아이템을 더 추가해도 스크롤이 생길 것입니다 */}
      </LogWrapper>
      <Navbar></Navbar>
    </>
  );
};

export default CustomerLog;
