import styled from "styled-components";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
  height: 68px;
  padding: 8px;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center; /* 중앙 정렬 */
  box-sizing: border-box;
  align-items: center;
  background-color: white;
`;
const Atag = styled.a`
  text-decoration: none;
  text-align: center;
  padding: 14px 20px;
  width: 100%;
  cursor: pointer; /* 클릭 가능 표시 */
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Navbar = () => {
  const { buyerId } = useParams(); // 구매자 id 받아오는 거

  const navigate = useNavigate();

  const handleRefresh = () => {
    console.log("주문내역 새로고침");
    navigate(`/customerlog/${buyerId}`, { replace: true }); // 주문내역 부분 새로고침
  };

  const homeRefresh = () => {
    console.log("사용자홈 새로고침");
    navigate(`/userhome/${buyerId}`, { replace: true }); // userHome 부분 새로고침
  };

  return (
    <Container>
      <Atag onClick={homeRefresh} to={`/userhome/${buyerId}`}>
        <Icon src="/assets/home.svg" />
      </Atag>
      <Atag to="/map">
        <Icon src="/assets/map.svg" />
      </Atag>
      <Atag onClick={handleRefresh} to={`/customerlog/${buyerId}`}>
        <Icon src="/assets/list.svg" />
      </Atag>
      <Atag to="/">
        <Icon src="/assets/user.svg" />
      </Atag>
    </Container>
  );
};

export default Navbar;
