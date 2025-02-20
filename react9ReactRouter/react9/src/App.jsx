import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Settings from "./components/profile/Settings";
import Order from "./components/profile/Order";
import ProductList from "./pages/Product/ProductList";
import Product from './pages/Product/Product';
import Login from './pages/Login';
import NotFound from "./shared/NotFound";
import Admin from './pages/Admin';
import AdminGuard from "./guard/AdminGuard";

function App() {

  let isLoggedIn = true; // You can bind this value with your auth system
  // if true -> u can route to admin component
  // if false -> u cant!

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/profile" element={<Profile />} >
          <Route path="/profile/settings" element={<Settings />} />
          <Route path="/profile/orders" element={<Order />} />
        </Route>

        <Route path="product-list" element={<ProductList />} />
        <Route path="product/:productId" element={<Product />} />

        <Route path="/login" element={<Login />} />
        
        {/* AdminGuard */}
        <Route path="/admin" element={
            <AdminGuard isLoggedIn={isLoggedIn}>
              <Admin />
            </AdminGuard>
          } />

        {/* 404 Not Found */}
        <Route path="/*" element={<NotFound />} /> {/* this should be at the end !!! */}
      </Routes>
    </>
  )
}

export default App
