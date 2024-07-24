// 사용자 Home 페이지
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import "./UserHome.css";

const UserHome = () => {
  return (
    <div className="userhome">
      <header>
        <Header />
      </header>
      <main>여기에 카테고리 넣을거임</main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default UserHome;
