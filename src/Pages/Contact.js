/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import { CommonSection } from "../Components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../Components/styles/product-details.css";
const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <form className="form w-100">
                <Row>
                  <div className="form__group  col-md-6">
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form__group col-md-6">
                    <input type="text" placeholder="Subject" required="" />
                  </div>
                </Row>
                <Row>
                  <div className="form__group col-md-6">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form__group col-md-6">
                    <input
                      type="text"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                </Row>
                <div className="form__group">
                  <textarea
                    type="text"
                    rows="5"
                    placeholder="Write your review"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="addToCart__btn">
                  Submit
                </button>
              </form>
            </Col>
            <Col lg="6" md="12" className="mt-3 mt-lg-0">
                  <iframe
                    style={{
                      position: "relative",
                      textAlign: "right",
                      height: "500px",
                      width: "100%",
                      overflow: "hidden",
                      background: "none!important",
                    
                    }}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Alexandria&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    scrolling="no"
                  ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
