// 사용자 Home 페이지
import React, { useState, useEffect } from "react";
import MainHeader from "../../components/MainHeader";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import Store from "../../components/Store";
import "./UserHome.css";
import { useParams } from "react-router-dom";

const storeInfo = [
  {
    id: "1",
    store: "파리바게트 인하대점",
    photo: "/assets/store.png",
    tel: "032-732-8188",
    open_time: "AM 9:00",
    close_time: "PM 9:00",
  },
  {
    id: "2",
    store: "퐁듀베이커리",
    photo: "/assets/fonduebakery.jpg",
    tel: " 031-688-3543",
    open_time: " AM 10:00",
    close_time: " PM 8:00",
  },
  {
    id: "3",
    store: "카페오빵",
    photo: "/assets/cafeobbang.jpg",
    tel: " 032-771-8989",
    open_time: " AM 9:00",
    close_time: " PM 8:00",
  },
  {
    id: "4",
    store: "다솔 빵집",
    photo: "/assets/cafeobbang.jpg",
    tel: " 032-734-8989",
    open_time: " AM 9:00",
    close_time: " PM 8:00",
  },
];

const UserHome = () => {
  const { buyerId } = useParams();

  return (
    <div className="userhome">
      <header>
        <MainHeader />
      </header>
      <div className="store" style={{fontSize:"24px", fontWeight:"700"}}>떨이 찾기<div style={{fontSize:"18px", color:"#525252",fontWeight:"500",marginTop:"5px" }}>원하는 떨이 종류를 찾아보세요!</div> </div>
      <Category buyerId={buyerId} />
      <div className="store">실시간 떨이 상품</div>
      <main>
        <div className="storecontainer">
          {storeInfo.map((store) => (
            <Store
              key={store.id}
              photo={store.photo}
              store={store.store}
              tel={store.tel}
              open_time={store.open_time}
              close_time={store.close_time}
            />
          ))}
        </div>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default UserHome;
