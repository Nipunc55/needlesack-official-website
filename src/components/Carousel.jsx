import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import {Carousel as BootstrapCarousel} from "bootstrap";
import {Carousel} from "bootstrap";
const MyCarousel = () => {
  return (
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://ichef.bbci.co.uk/news/640/cpsprodpb/15951/production/_117310488_16.jpg'
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='
            '
            className='d-block w-100'
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://ichef.bbci.co.uk/news/640/cpsprodpb/15951/production/_117310488_16.jpg'
            className='d-block w-100'
            alt='...'
          />
        </div>
      </div>
      <button
        class='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Previous</span>
      </button>
      <button
        class='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleControls'
        data-bs-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
