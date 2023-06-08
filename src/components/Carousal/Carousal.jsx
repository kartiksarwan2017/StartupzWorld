import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousal = () => {
  return (
    <>
      <Carousel fade className='h-auto w-full'>
      <Carousel.Item>
        <img
          className="d-block w-full h-96"
          src="https://kanoonforall.com/wp-content/uploads/2021/07/Start-up.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-96"
          src="https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52457371-stock-photo-people-and-startup-business-concept.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-96" 
          src="https://img.freepik.com/free-vector/isomertic-startup-concept-landing-page_23-2148287102.jpg?size=626&ext=jpg&ga=GA1.1.1300473401.1686197265&semt=sph"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousal;