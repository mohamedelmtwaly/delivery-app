import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'reactstrap';
import categoryImg1 from '../../../assets/images/category-01.png';
import categoryImg2 from '../../../assets/images/category-02.png';
import categoryImg3 from '../../../assets/images/category-03.png';
import categoryImg4 from '../../../assets/images/category-04.png';
import '../../styles/category.css';
const categoryData = [
  {
    display: 'FastFood',
    imgUrl: categoryImg1,
  },
  {
    display: 'Pizza',
    imgUrl: categoryImg2,
  },
  {
    display: 'Asian Food',
    imgUrl: categoryImg3,
  },
  {
    display: 'Row Meat',
    imgUrl: categoryImg4,
  },
];

const category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((category, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <LazyLoadImage src={category.imgUrl} alt={category.display} effect='blur'/>
              </div>
              <h6>{category.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default category;
