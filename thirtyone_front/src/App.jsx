import React from 'react';
import {BrowserRouter, Routes, Route,Outlet} from 'react-router-dom';
//login part (dongjae)
import Card_register from './pages/dongjae/Card_register';
import Certify from './pages/dongjae/Certify';
import Certify_complete from './pages/dongjae/Certify_complete';
import Customer_signup from './pages/dongjae/Customer_signup';
import Layout from './pages/dongjae/Layout';
import Location from './pages/dongjae/Location';
import Login from './pages/dongjae/Login';
import Seller_signup_1 from './pages/dongjae/Seller_signup_1';
import Seller_signup_2 from './pages/dongjae/Seller_signup_2';
import Signup_main from './pages/dongjae/Signup_main';
import Subscribe_1 from './pages/dongjae/Subscribe_1';
import Subscribe_2 from './pages/dongjae/Subscribe_2';
import Mypage from './pages/dongjae/Mypage';
import Mypage_change from './pages/dongjae/Mypage_change';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element= {<Layout/>}>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup_main/>}/>
            <Route path="/signup/seller/1" element={<Seller_signup_1/>}/>
            <Route path="/signup/seller/1/2" element={<Seller_signup_2/>}/>
            <Route path="/signup/seller/1/2/location" element={<Location/>}/>
            <Route path="/signup/customer" element={<Customer_signup/>}/>
            <Route path="/subscribe/1" element={<Subscribe_1/>}/>
            <Route path="/subscribe/1/2" element={<Subscribe_1/>}/>
            <Route path="/subscribe/1/2/card" element={<Card_register/>}/>
            {/* 마이페이지 home이랑 경로 맞춰야함 */}
            <Route path="/userhome/mypage" element={<Mypage/>}/>
            <Route path="/userhome/mypage/change" element={<Mypage_change/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App