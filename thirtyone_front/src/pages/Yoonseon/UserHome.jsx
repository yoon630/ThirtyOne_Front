// 사용자 Home 페이지
import React, { useState, useEffect } from "react";
import MainHeader from "../../components/MainHeader";
import Search from "../../components/Search";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import Store from "../../components/Store";
import "./UserHome.css";

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
    tel: "031-688-3543",
    open_time: "AM 10:00",
    close_time: "PM 8:00",
  },
  {
    id: "3",
    store: "카페오빵",
    photo: "/assets/cafeobbang.jpg",
    tel: "032-771-8989",
    open_time: "AM 9:00",
    close_time: "PM 8:00",
  },
];

const UserHome = () => {
  return (
    <div className="userhome">
      <header>
        <MainHeader />
        <Search />
      </header>
      <Category />
      <div className="store">지금 떨이 중인 가게</div>
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
