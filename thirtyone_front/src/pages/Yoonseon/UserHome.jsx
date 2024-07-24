// 사용자 Home 페이지
import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import Store from "../../components/Store";
import "./UserHome.css";

const UserHome = () => {
  return (
    <div className="userhome">
      <header>
        <Header />
      </header>
      <main>
        <Category />
        <div className="store">지금 떨이 중인 가게</div>
        <div className="storecontainer">
          <Store></Store>
        </div>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default UserHome;
