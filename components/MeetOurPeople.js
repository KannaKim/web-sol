import React from 'react';

const MeetOurPeople = () => {
  return (
    <article className='container my-5 text-center text-lg-start' id="MeetOurPeople">
        <h1 className='fw-bold'>Meet our people</h1>
        <div className='row flex-sm-column flex-lg-row justify-content-lg-between justify-content-sm-center align-items-center my-5 g-5'>
            <div className='col-lg-3 col-sm-8 text-center'>
                <img className='w-100 mb-3' src='/img/CEO_350_350_cropped.jpg'></img>
                <h4 className='m-3 fw-bold'>
                    Pam Phil
                </h4>
                <i className='text-secondary'>
                    lead developer
                </i>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                </p>
            </div>
            <div className='col-lg-3 col-sm-8 text-center'>
                <img className='w-100 mb-3' src='/img/CEO4_350_350_cropped.jpg'></img>
                <h4 className='m-3 fw-bold'>
                    Joseph Miller
                </h4>
                <i className='text-secondary'>
                    CEO
                </i>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                </p>
            </div>
            <div className='col-lg-3 col-sm-8 text-center'>
                <img className='w-100 mb-3' src='/img/CEO3_350_350_cropped.jpg'></img>
                <h4 className='m-3 fw-bold'>
                    Emma Kim
                </h4>
                <i className='text-secondary'>
                    executive producer
                </i>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                </p>
            </div>
        </div>
    </article>
  );
};

export default MeetOurPeople;
