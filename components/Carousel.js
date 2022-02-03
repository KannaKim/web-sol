import React from 'react';
import Image from 'next/image';
const Carousel = () => {
  return (

        <div id="carousel_company_intro" className="carousel slide pt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel_company_intro" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel_company_intro" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel_company_intro" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/caraousel1_2_1920_766.jpg" className="d-block w-100 h-100" alt="..."/>
                    {/* <Image src="/img/caraousel1_1920_1080.jpg" className="d-block w-50" width={1920} height={1080} layout='responsive' alt="..."/> */}
                </div>
                <div className="carousel-item">
                    <img src="/img/caraousel2_1920_766.jpg" className="d-block w-100 h-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="/img/caraousel3_1920_766.jpg" className="d-block w-100 h-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel_company_intro" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel_company_intro" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

  );
};

export default Carousel;
