import React, { useEffect, useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../Components/styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../Components/UI/category/category";
import "../Components/styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../Components/UI/product-card/ProductCard";
import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialCarousel from "../Components/UI/slider/TestimonialCarousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet consectetur",
  },
];
const Home = () => {
  const [category, setCategory] = useState("All");
  const itemsWitched = useSelector((state) => state.cart.cartWitchItem);
  const [allProduct, setAllProduct] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "All") {
      setAllProduct(products);
    }
    if (category === "BURGER") {
      const fiteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProduct(fiteredProducts);
    }
    if (category === "PIZZA") {
      const fiteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProduct(fiteredProducts);
    }
    if (category === "BREAD") {
      const fiteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProduct(fiteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food
                  <span> at your door</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quae, cumque. adipisicing elit. Quae, cumque.
                </p>
                <div className="hero__btns d-flex align-items-center gap-5">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__Foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-4">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No Shipping Charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <LazyLoadImage
                  src={heroImg}
                  alt="heroImg"
                  className="w-100"
                  effect="blur"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <p className="feature__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" className="mt-5" key={index}>
                <div className="feature__item text-center px-5 py-3">
                  <LazyLoadImage
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-25 mb-3"
                    effect="blur"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>The last products you have seen</h2>
            </Col>
            {itemsWitched.length === 0 ? (
              <h4 className="text-center">
                You haven't seen any products recently
              </h4>
            ) : (
              itemsWitched.map((items, index) => (
                <Col lg="3" md="4" sm="6" xs="12" key={index} className="mt-5">
                  <ProductCard item={items} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-md-4">
                <button
                  className={`all__Foods ${
                    category === "All" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <LazyLoadImage
                    src={foodCategoryImg01}
                    alt="img1"
                    effect="blur"
                  />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <LazyLoadImage
                    src={foodCategoryImg02}
                    alt="img2"
                    effect="blur"
                  />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <LazyLoadImage
                    src={foodCategoryImg03}
                    alt="img3"
                    effect="blur"
                  />
                  Bread
                </button>
              </div>
            </Col>
            {allProduct.map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="12" key={index} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choosse-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <LazyLoadImage
                src={whyImg}
                alt="Location"
                className="w-100"
                effect="blur"
              />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="why__tasty-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dicta quasi eligendi inventore nesciunt tempore ad, dolorum
                  consectetur vel dolorem dolore delectus porro. Cupiditate
                  dolorem odit sunt ex soluta magnam laboriosam!
                </p>
                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore, labore?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Quality Support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit, incidunt?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>
                      Order from any Location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit, incidunt?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item, index) => (
              <Col lg="3" md="4" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle  mb-4">Testimonial</h5>
                <h2 className="testimonial__title  mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  voluptatem, quo sit veritatis molestias cum qui sapiente
                  itaque earum enim. Provident tempore dolor repellat esse
                  nostrum ad eos, rem earum.
                </p>
                <TestimonialCarousel />
              </div>
            </Col>
            <Col lg="6" md="6">
              <LazyLoadImage
                src={networkImg}
                alt="networkImg"
                className="w-100"
                effect="blur"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
