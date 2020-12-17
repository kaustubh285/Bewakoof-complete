import React from "react";

function CarouselAd() {
  return (
    <div
      id='carouselExampleControls'
      className='carousel slide'
      data-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-tribe-offer-discount-online-shopping-deskto-bannr-1599219437.jpg'
            alt='Second slide'
          />
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-rasode-me-kaun-tha-online-fashion-desktop-STRIP-1599378703.jpg'
            alt='Third slide'
          />
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewakoof-kkr-cricket-carnival-desktop-strip-1601059929.jpg'
            alt='Third slide'
          />
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://images.bewakoof.com/uploads/grid/app/bewkoof-cover-parade-mobile-online-shopping-desktop-strip-1601024464.jpg'
            alt='Third slide'
          />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleControls'
        role='button'
        data-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleControls'
        role='button'
        data-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
}

export default CarouselAd;
