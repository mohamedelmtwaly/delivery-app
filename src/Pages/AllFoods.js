import React, { useState, useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { CommonSection } from "../Components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../Components/UI/product-card/ProductCard";
import "../Components/styles/all-foods.css";
import ReactPaginate from "react-paginate";
import "../Components/styles/pagination.css";
const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [allProducts, setAllProducts] = useState(products);
  const [FallProducts, setFAllProducts] = useState(allProducts);
  const [filter, setFilter] = useState("");
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  useEffect(() => {
    setAllProducts(
      products.filter((item) => {
        if (searchTerm === "") return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
          return item;
      })
    );
  }, [searchTerm]);
  useEffect(() => {
    if (filter === "defualt") {
      setAllProducts(
        allProducts.sort((a, b) => {
          const nameA = a.id;
          const nameB = b.id;
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (filter === "ascending") {
      setAllProducts(
        allProducts.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (filter === "descending") {
      setAllProducts(
        allProducts.sort((a, b) => {
          const nameA = a.title.toUpperCase();
          const nameB = b.title.toUpperCase();
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (filter === "high-price") {
      setAllProducts(allProducts.sort((a, b) => b.price - a.price));
    }
    if (filter === "low-price") {
      setAllProducts(allProducts.sort((a, b) => a.price - b.price));
    }
  }, [filter, allProducts]);
  useEffect(() => {
    const displayPage = allProducts.slice(
      visitedPage,
      visitedPage + productPerPage
    );

    setFAllProducts(displayPage);
  }, [allProducts, filter, visitedPage]);
  const pageCount = Math.ceil(allProducts.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <div className="mt-2">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for....."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
            <div className="mt-2">
              <div className="sorting__widget text-end">
                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value="defualt">Defualt</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </div>
          </div>
          <Row>
            {FallProducts.length === 0 ? (
              <h3 className="text-center mt-5">Not Found</h3>
            ) : (
              FallProducts.map((item) => (
                <Col lg="3" md="4" sm="12" xs="12" className="mb-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            )}
            <div>
              {FallProducts.length !== 0 ? (
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel="Prev"
                  nextLabel="Next"
                  containerClassName="paginationBttns"
                />
              ) : null}
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
