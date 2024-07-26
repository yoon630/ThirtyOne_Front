// 사용자 Home 페이지
import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import Store from "../../components/Store";
import "./UserHome.css";

const mockData = [
  {
    id: 1,
    store: "파리바게트 인하점",
    img: "img1",
    call: "032-861-7070",
    time: "09:00 - 21:00",
  },
  {
    id: 2,
    store: "이삭토스트 인하점",
    img: "img2",
    call: "032-863-8877",
    time: "09:00 - 20:00",
  },
  {
    id: 3,
    store: "왕가탕후루 인하점",
    img: "img3",
    call: "032-861-7343",
    time: "12:00 - 21:00",
  },
];

const UserHome = () => {
  return (
    <div className="userhome">
      <header>
        <Header />
      </header>
      <Category />
      <div className="store">지금 떨이 중인 가게</div>
      <main>
        <div className="storecontainer">
          {mockData.map(({ id, store, img, call, time }) => {
            console.log(`Rendering store component :${store}`);
            return (
              <Store key={id} store={store} img={img} call={call} time={time} />
            );
          })}
        </div>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};

export default UserHome;
