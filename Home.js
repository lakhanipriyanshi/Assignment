import React from 'react'
import slider1 from './img/1slider.jpg';
import slider2 from './img/2slider.jpg';
import slider3 from './img/3slider.jpg';

export default function Home() {
  return (
    <div>

<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider1} className="d-block w-100" alt="..." style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..." style={{height:"500px"}}/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="..." style={{height:"500px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
