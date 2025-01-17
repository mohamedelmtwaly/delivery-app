import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { CommonSection } from "../Components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import "../Components/styles/checkout-page.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Checkout = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const cartItems = useSelector((state) => state.cart.cartItems);
  let navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("../home");
    }
  });
  const shippingInfo = [];
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostal, setEnterPostal] = useState("");
  const submitHandler = (e) => {
    e.preventdefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      number: enterNumber,
      country: enterCountry,
      city: enterCity,
      postal: enterPostal,
    };
    shippingInfo.push(userShippingAddress);
  };
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="postal code"
                    required
                    onChange={(e) => setEnterPostal(e.target.value)}
                  />
                </div>
                <button className="addToCart__btn">Payment</button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6>
                  subtotal: <span className="mb-3">${cartTotalAmount}</span>
                </h6>
                <h6>
                  Shipping: <span className="">${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5>
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
