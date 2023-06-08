import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card';
import "react-multi-carousel/lib/styles.css";
import "./Category.scss";
import data from "./categories.json";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Category = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(data.category);
  }, []);
console.log(category);

  return (
    <> 
      <div className="category-container pt-10">
        <div className='heading text-4xl d-flex pl-9'>
          <h1 className='mr-3'>Explore By</h1> 
          <span className='font-semibold'>Category</span>
        </div>

      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        className='carousal-container'
      >
        {category.map((item, index) => {
          console.log(item)
          return (
            <Card  key={index} className='card-container' >
            <Card.Img variant="top" src={item.imgUrl}  alt="categoryImg" className="categoryImg" />
            <Card.Body className='card-body'>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
          );
        })}
      </Carousel>

      </div>
       
    </>
  )
}

export default Category;