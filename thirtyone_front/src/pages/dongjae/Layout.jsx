import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Layout_wrapper = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`;

const Layout = () => {
  return (
    <Layout_wrapper>
      <Outlet />
    </Layout_wrapper>
  );
};

export default Layout;
