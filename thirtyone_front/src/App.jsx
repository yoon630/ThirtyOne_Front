import { BrowserRouter, Routes, Route } from "react-router-dom";
// dongjae part
import Layout from "./pages/dongjae/Layout";
import Location from "./pages/dongjae/Location";
import Login from "./pages/dongjae/Login";
import Subscribe from "./pages/dongjae/Subscribe";
import CustomerLog from "./pages/dongjae/Customer_log";

// Yoonseon part
import UserHome from "./pages/Yoonseon/UserHome";
import Search from "./pages/Yoonseon/Search";

import ItemPage from "./pages/Yoonseon/ItemPage";
import ItemOrder from "./pages/Yoonseon/ItemOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/location" element={<Location />} />
            <Route path="/subscribe" element={<Subscribe />} />

            <Route path="/userhome" element={<UserHome />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search" element={<Search />} />

            <Route path="/itempage/:category" element={<ItemPage />} />
            <Route path="/itemorder" element={<ItemOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
