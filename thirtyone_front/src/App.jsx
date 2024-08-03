import { BrowserRouter, Routes, Route } from "react-router-dom";
// dongjae part
import Layout from "./pages/dongjae/Layout";
import Customer_start from "./pages/dongjae/Customer_start";
import Login from "./pages/dongjae/Login";
import Subscribe from "./pages/dongjae/Subscribe";
import Customer_log from "./pages/dongjae/Customer_log";

// Yoonseon part
import UserHome from "./pages/Yoonseon/UserHome";
import ItemPage from "./pages/Yoonseon/ItemPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="/customer_start" element={<Customer_start />} />
            <Route path="/subscribe" element={<Subscribe />} />

            <Route path="/userhome/:buyerId" element={<UserHome />} />

            <Route path="/itempage/:category/:buyerId" element={<ItemPage />} />

            <Route path="/customerlog/:buyerId" element={<Customer_log />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
