import React from "react";
import { Link } from "react-router-dom";
import "../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/shopping-cart/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const ProductCard = (props) => {
  const { id, title, image01, price, witchItem = true } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  const witchedItem = () => {
    dispatch(
      cartAction.addWitchItem({
        id,
        title,
        image01,
        price,
        witchItem,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img " >
        <Link to={`/foods/${id}`}>
          <LazyLoadImage
            src={image01}
            alt={title}
            className="w-50"
            effect="blur"
            onClick={witchedItem}
          />
        </Link>
      </div>
      <div className="product__content">
        <h5 onClick={witchedItem}>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
