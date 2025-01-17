import React from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import PagesRouters from "../../routes/PagesRouters.js";
import Cart from "../UI/cart/Cart.js";
import { useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />
      {showCart && <Cart />}
      <div>
        <PagesRouters />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
