import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import "../../styles/slider.css";
const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          obcaecati corrupti illum veniam impedit maxime eum nulla, voluptas
          provident ab accusantium cupiditate libero atque voluptates vel
          deserunt, vero vitae? Odit!
        </p>
        <div className="d-flex align-items-center gap-2">
          <div className="w-25">
            <LazyLoadImage
              src={ava01}
              alt="ava01"
              className="rounded w-100"
              effect="blur"
            />
          </div>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          obcaecati corrupti illum veniam impedit maxime eum nulla, voluptas
          provident ab accusantium cupiditate libero atque voluptates vel
          deserunt, vero vitae? Odit!
        </p>
        <div className="d-flex align-items-center gap-2">
          <div className="w-25">
            <LazyLoadImage
              src={ava02}
              alt="ava01"
              className="rounded w-100"
              effect="blur"
            />
          </div>
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          obcaecati corrupti illum veniam impedit maxime eum nulla, voluptas
          provident ab accusantium cupiditate libero atque voluptates vel
          deserunt, vero vitae? Odit!
        </p>
        <div className="d-flex align-items-center gap-2">
          <div className="w-25">
            <LazyLoadImage
              src={ava03}
              alt="ava01"
              className="rounded w-100"
              effect="blur"
            />
          </div>
          <h6>Steven Doe</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialCarousel;
