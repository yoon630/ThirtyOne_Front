import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

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
const Atag = styled(Link)`
  text-decoration: none;
  text-align: center;
  padding: 14px 20px;
  width: 100%;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Navbar = () => {
  return (
    <Container>
      <Atag to="/userhome">
        <Icon src="assets/home.svg" />
      </Atag>
      <Atag to="/map">
        <Icon src="assets/map.svg" />
      </Atag>
      <Atag to="/">
        <Icon src="assets/list.svg" />
      </Atag>
      <Atag to="/">
        <Icon src="assets/user.svg" />
      </Atag>
    </Container>
  );
};

export default Navbar;
