import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import { CommonSection } from "../Components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "../Components/styles/cart-page.css";
import { cartAction } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h3 className="text-center">Cart is empty </h3>
              ) : (
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((items) => (
                        <Tr item={items} key={items.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <div className="mt-4">
                <h6>
                  subtotal:
                  <span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn d-flex flex-wrap">
                  <Link
                    to="/foods"
                    className="addToCart__btn me-3 mt-2 mt-sm-0"
                  >
                    Contiune Shopping
                  </Link>

                  <Link
                    to="/checkout"
                    className={`addToCart__btn mt-2 mt-sm-0 ${
                      cartItems.length === 0 ? " disabled" : null
                    }`}
                  >
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const { id, title, price, image01, quantity } = item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartAction.deleteItem(id));
  };
  return (
    <tr>
      <td className="cart__img-box">
        <LazyLoadImage src={image01} alt={title} effect="blur"/>
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td className="cart__img-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
