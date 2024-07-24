import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
  height: 68px;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center; /* 중앙 정렬 */
  box-sizing: border-box;
`;
const Atag = styled.a`
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
      <Atag>
        <Icon src="assets/home.svg" />
      </Atag>
      <Atag>
        <Icon src="assets/map.svg" />
      </Atag>
      <Atag>
        <Icon src="assets/list.svg" />
      </Atag>
      <Atag>
        <Icon src="assets/user.svg" />
      </Atag>
    </Container>
  );
};

export default Navbar;
