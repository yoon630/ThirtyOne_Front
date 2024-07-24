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
import SellerHome from './pages/jaheok/SellerHome';
import Map from './pages/jaheok/Map';
import ProductRegistration from './pages/jaheok/ProductRegistration';
import SellingManage from './pages/jaheok/SellingManage';
import SellingHistory from './pages/jaheok/SellingHistory';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element= {<Layout/>}>
            <Route path="/" element={<Login/>}/>
            <Route path="/sellerhome" element={<SellerHome/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/productregi" element={<ProductRegistration/>}/>
            <Route path="/sellingmanage" element={<SellingManage/>}/>
            <Route path="/sellinghistory" element={<SellingHistory/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
